import { add, division, minus, mul, toFixed } from '@/share/utils';
import { Manager } from '../../model/manager';
import { Descriptions } from '@douyinfe/semi-ui';

export const ResultRender = ({ manager }: { manager?: Manager }) => {
  if (!manager) {
    return null;
  }
  const { initialAmount, availableAmount, data, history, availableStocks } = manager;

  const availableStocksAmount = toFixed(mul(availableStocks, manager.data.at(-1)?.closingPrice || '0')); // 持股金额 = 持股数量 * 当前股价

  const totalAmount = add(availableAmount, availableStocksAmount); // 总金额 = 可用余额 + 持股金额

  const yieldRate = toFixed(mul(division(minus(totalAmount, initialAmount), initialAmount), 100)); // 收益率

  const list = [
    { key: '初始余额', value: toFixed(initialAmount) },
    {
      key: '可用余额',
      value: availableAmount,
    },
    { key: '持股数量', value: availableStocks },
    { key: '持股金额', value: availableStocksAmount },
    { key: '总金额', value: totalAmount },
    {
      key: '总收益率',
      value: <span style={{ color: Number(yieldRate) > 0 ? 'red' : 'green' }}>{`${yieldRate}%`}</span>,
    },
    { key: '个股交易日总数', value: data.length },
    { key: '总买卖次数', value: history.length },
  ];

  return <Descriptions data={list} row size="small" />;
};
