import { add, minus, mul, toFixed } from '@/share/utils';
import { Manager } from './manager';

const RATE = 0.1; // 涨跌幅度：10%

/* k线一天的数据 */
export class Meta {
  manager: Manager; // 管理器实例
  date: string; // 日期
  openingPrice: string; // 开盘价
  closingPrice: string; // 收盘价
  highestPrice: string; // 最高价
  lowestPrice: string; // 最低价
  volume: string; // 成交量
  turnover: string; // 成交额
  amplitude: string; // 振幅
  priceFluctuation: string; // 涨跌幅
  changeInPrice: string; // 涨跌额
  turnoverRate: string; // 换手率
  ma5 = '0'; // 5日均线
  ma10 = '0'; // 10日均线
  ma20 = '0'; // 20日均线
  ma30 = '0'; // 30日均线

  constructor(str: string, manager: Manager) {
    this.manager = manager;
    const list = str.split(',');
    this.date = list[0];
    this.openingPrice = list[1];
    this.closingPrice = list[2];
    this.highestPrice = list[3];
    this.lowestPrice = list[4];
    this.volume = list[5];
    this.turnover = list[6];
    this.amplitude = list[7];
    this.priceFluctuation = list[8];
    this.changeInPrice = list[9];
    this.turnoverRate = list[10];
  }

  /* 前一日收盘价 */
  get previousPrice() {
    return minus(this.closingPrice, this.changeInPrice);
  }

  /* 是否价格上涨 */
  get rise() {
    return Number(this.closingPrice) > Number(this.openingPrice);
  }

  /* 是否价格不变 */
  get unchanged() {
    return Number(this.closingPrice) === Number(this.openingPrice);
  }

  /* 是否价格下跌 */
  get decline() {
    return Number(this.closingPrice) < Number(this.openingPrice);
  }

  /* 价格限制：上下10% */
  get limit() {
    return toFixed(mul(this.previousPrice, RATE));
  }

  /* 涨停价 */
  get limitUpPrice() {
    return add(this.previousPrice, this.limit);
  }

  /* 跌停价 */
  get limitDownPrice() {
    return minus(this.previousPrice, this.limit);
  }

  /* 是否涨停 */
  get limitUp() {
    return Number(this.closingPrice) === Number(this.limitUpPrice);
  }

  /* 是否跌停 */
  get limitDown() {
    return Number(this.closingPrice) === Number(this.limitDownPrice);
  }
}
