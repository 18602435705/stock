import { HistoryItem } from '../model/manager';

const render = (text: string, record: HistoryItem) => {
  const { profit } = record;
  const isWin = Number(profit) > 0;
  return (
    <span
      style={{
        color: isWin ? 'red' : 'green',
      }}
    >
      {text}
    </span>
  );
};

export const historyColumns = [
  {
    title: '买入价格',
    dataIndex: 'purchasePrice',
  },
  {
    title: '买入时间',
    dataIndex: 'purchaseTime',
  },
  {
    title: '卖出价格',
    dataIndex: 'sellingPrice',
  },
  {
    title: '卖出时间',
    dataIndex: 'sellingTime',
  },
  {
    title: '交易数量',
    dataIndex: 'count',
  },
  {
    title: '收益',
    dataIndex: 'profit',
    render,
  },
  {
    title: '收益率',
    dataIndex: 'profitRate',
    render,
  },
];
