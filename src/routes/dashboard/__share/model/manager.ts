import { add, division, minus, mul, toFixed } from '@/share/utils';
import { Meta } from './meta';

export enum Action {
  BUY, // 买入
  SELL, // 卖出
}

/* 均线类型 */
export enum MaType {
  FIVE = 5,
  TEN = 10,
  TWENTY = 20,
  THIRTY = 30,
  SIXTY = 60,
}

const MULTIPLE = 100; // 百分数转化倍数

/* 获取各条线的数据 */
const splitData = (rawData: Meta[] = []) => {
  const categoryData = [];
  const values = [];
  const volumes = [];
  for (const element of rawData) {
    categoryData.push(element.date);
    values.push([element.openingPrice, element.closingPrice, element.lowestPrice, element.highestPrice]);
    volumes.push(element.volume);
  }
  return {
    categoryData, // 横坐标
    values, // 蜡烛值
    volumes, // 成交量
  };
};

/* 计算均线 */
const calculateMA = (dayCount: number, values: string[][]) => {
  const result = [];
  for (let i = 0, len = values.length; i < len; i++) {
    if (i < dayCount) {
      result.push('-');
      continue;
    }
    let sum = 0;
    for (let j = 0; j < dayCount; j++) {
      sum += Number(values[i - j][1]); // 收盘价格求和
    }
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    result.push(Number(sum / dayCount).toFixed(3));
  }
  return result;
};

/* 获取标记线数据 */
const calcMarkLineData = (history: HistoryItem[] = []) => {
  const data = history.map((item) => [
    { coord: [item.purchaseTime, item.purchasePrice] },
    { coord: [item.sellingTime, item.sellingPrice] },
  ]);
  return data;
};

/* 单次交易信息 */
export class HistoryItem {
  purchasePrice: string; // 买入价格
  purchaseTime: string; // 买入时间
  sellingPrice: string; // 卖出价格
  sellingTime: string; // 卖出时间
  count: number; // 交易数量
  constructor(
    purchasePrice: string,
    purchaseTime: string,
    sellingPrice: string,
    sellingTime: string,
    count: number,
  ) {
    this.purchasePrice = purchasePrice;
    this.purchaseTime = purchaseTime;
    this.sellingPrice = sellingPrice;
    this.sellingTime = sellingTime;
    this.count = count;
  }

  /* 收益 */
  get profit() {
    const { sellingPrice, purchasePrice, count } = this;
    return mul(minus(sellingPrice, purchasePrice), count);
  }

  /* 收益率 */
  get profitRate() {
    const { sellingPrice, purchasePrice } = this;
    return `${toFixed(mul(division(minus(sellingPrice, purchasePrice), purchasePrice), MULTIPLE))}%`;
  }
}

export interface StackInfo {
  price: string; // 交易价格
  meta: Meta; // 交易日信息
  action: Action; // 交易动作
  count: number; // 交易数量
}

export interface ChartData {
  categoryData: string[]; // 图表：横坐标
  values: string[][]; // 图表：蜡烛数据
  volumes: string[]; // 图表：成交量数据
  ma5: string[]; // 图表：5日均线
  ma10: string[]; // 图表：10日均线
  ma20: string[]; // 图表：20日均线
  ma30: string[]; // 图表：30日均线
  markLineData?: { coord: string[] }[][]; // 标记线数据
}

export class Manager {
  initialAmount: string; // 初始金额
  availableAmount: string; // 可用金额
  availableStocks = 0; // 可用股票数量
  data: Meta[] = []; // k线数据
  chartData: ChartData = {
    categoryData: [], // 图表：横坐标
    values: [], // 图表：蜡烛数据
    volumes: [], // 图表：成交量数据
    ma5: [], // 图表：5日均线
    ma10: [], // 图表：10日均线
    ma20: [], // 图表：20日均线
    ma30: [], // 图表：30日均线
    markLineData: [], // 标记线数据
  };
  stack: StackInfo[] = []; // 买入栈，用来记录交易价格
  history: HistoryItem[] = []; // 交易历史记录
  constructor(rawData: string[], initialAmount: string) {
    this.initialAmount = initialAmount;
    this.availableAmount = initialAmount;
    this.data = rawData.map((item) => new Meta(item, this));
    this.calcChartData();
  }

  /* 是否持仓 */
  get position() {
    return this.availableStocks > 0;
  }

  /* 计算图表数据 */
  calcChartData() {
    const { data } = this;
    const {
      categoryData, // 横坐标
      values, // 蜡烛值
      volumes, // 成交量
    } = splitData(data);
    // 5、10、20、30日线
    const ma5 = calculateMA(MaType.FIVE, values);
    const ma10 = calculateMA(MaType.TEN, values);
    const ma20 = calculateMA(MaType.TWENTY, values);
    const ma30 = calculateMA(MaType.THIRTY, values);
    for (let i = 0; i < data.length; i++) {
      data[i].ma5 = ma5[i];
      data[i].ma10 = ma10[i];
      data[i].ma20 = ma20[i];
      data[i].ma30 = ma30[i];
    }
    this.chartData = { categoryData, values, volumes, ma5, ma10, ma20, ma30 };
  }

  /* 购买股票 */
  buy(price: string, meta: Meta) {
    const { availableAmount } = this;
    const count = Math.floor(Number(availableAmount) / Number(price)); // 全仓买入
    this.availableStocks = count;
    this.availableAmount = minus(availableAmount, mul(price, count));

    const purchaseInfo = { price, meta, action: Action.BUY, count }; // 买入信息
    this.stack.push(purchaseInfo);
  }

  /* 卖出股票 */
  sell(price: string, meta: Meta) {
    const { availableAmount, availableStocks: count } = this;
    this.availableStocks = 0; // 全仓卖出
    this.availableAmount = add(availableAmount, mul(price, count));

    const sellingInfo = { price, meta, action: Action.SELL, count }; // 卖出信息
    this.stack.push(sellingInfo);

    this.pushHistory();
  }

  /* 记录快照 */
  pushHistory() {
    const [purchaseInfo, sellingInfo] = this.stack;

    const {
      price: purchasePrice,
      meta: { date: purchaseTime },
      count,
    } = purchaseInfo;

    const {
      price: sellingPrice,
      meta: { date: sellingTime },
    } = sellingInfo;

    this.history.push(new HistoryItem(purchasePrice, purchaseTime, sellingPrice, sellingTime, count));

    this.stack = [];
  }

  /* 决策 */
  makingDecisions(meta: Meta) {
    const { position } = this;
    const { rise, decline, closingPrice } = meta;
    /* 持仓状态 */
    if (position) {
      /* 价格上涨：卖出 */
      if (rise) {
        this.sell(closingPrice, meta);
      }
    } /* 空仓状态 */ else {
      /* 价格下跌：买入 */
      if (decline) {
        this.buy(closingPrice, meta);
      }
    }
  }

  /* 开始运行 */
  run() {
    const { data } = this;
    for (const meta of data) {
      this.makingDecisions(meta);
    }
    this.chartData.markLineData = calcMarkLineData(this.history);
    return this;
  }
}
