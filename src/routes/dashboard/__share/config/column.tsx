import { IconArrowDown, IconArrowRight, IconArrowUp } from '@douyinfe/semi-icons';
import { Meta } from '../model/meta';

export const columns = [
  {
    title: '日期',
    dataIndex: 'date',
  },
  {
    title: '开盘价',
    dataIndex: 'openingPrice',
  },
  {
    title: '收盘价',
    dataIndex: 'closingPrice',
  },
  {
    title: '最高价',
    dataIndex: 'highestPrice',
  },
  {
    title: '最低价',
    dataIndex: 'lowestPrice',
  },
  {
    title: '成交量',
    dataIndex: 'volume',
  },
  {
    title: '成交额',
    dataIndex: 'turnover',
  },
  {
    title: '振幅',
    dataIndex: 'amplitude',
  },
  {
    title: '涨跌幅',
    dataIndex: 'priceFluctuation',
  },
  {
    title: '涨跌额',
    dataIndex: 'changeInPrice',
  },
  {
    title: '换手率',
    dataIndex: 'turnoverRate',
  },
  // {
  //   title: '前一日元数据',
  //   dataIndex: 'previousMeta',
  // },
  {
    title: '前一日价格',
    dataIndex: 'previousPrice',
  },
  // {
  //   title: '是否价格上涨',
  //   dataIndex: 'rise',
  // },
  // {
  //   title: '是否价格不变',
  //   dataIndex: 'unchanged',
  // },
  // {
  //   title: '是否价格下跌',
  //   dataIndex: 'decline',
  // },
  {
    title: '当日价格变化',
    // dataIndex: 'limit',
    render(_: string, record: Meta) {
      const { rise, unchanged, decline } = record;
      if (rise) {
        return <IconArrowUp style={{ color: 'red' }} />;
      }
      if (unchanged) {
        return <IconArrowRight />;
      }
      if (decline) {
        return <IconArrowDown style={{ color: 'green' }} />;
      }
    },
  },
  {
    title: '当日价格限制',
    dataIndex: 'limit',
  },
  {
    title: '涨停价',
    dataIndex: 'limitUpPrice',
  },
  {
    title: '跌停价',
    dataIndex: 'limitDownPrice',
  },
  {
    title: '是否涨停',
    dataIndex: 'limitUp',
    render(text: boolean) {
      return text ? '是' : '否';
    },
  },
  {
    title: '是否跌停',
    dataIndex: 'limitDown',
    render(text: boolean) {
      return text ? '是' : '否';
    },
  },
];
