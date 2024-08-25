import { Card, Table, Button, Skeleton, Row, Col } from '@douyinfe/semi-ui';
import { useEffect, useState } from 'react';
import { Manager } from './__share/model/manager';
import { historyColumns } from './__share/config/history-column';
import { Candlestick } from './__share/components/candlestick';
import { getKlineByCode } from '@/api/index';
import { ResultRender } from './__share/components/result-render';

const Page = () => {
  const [manager, setManager] = useState<Manager>();
  const [loading, setLoading] = useState(false);

  const test = (data: string[]) => {
    const manager = new Manager(data, '100000');
    manager.run();
    console.log('🚀 ~ manager:', manager);
    setManager(manager);
    setLoading(false);
  };

  const fetchData = async () => {
    // 002304
    try {
      const res: any = await getKlineByCode('600050', '1');
      console.log('股票信息res:', res);
      test(res.data.klines.slice(-300));
    } catch (error) {
      console.log('请求接口错误 error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: 36 }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Skeleton style={{ height: 500 }} placeholder={<Skeleton.Image />} loading={!manager}>
            <Candlestick manager={manager} />
          </Skeleton>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Skeleton style={{ height: 149 }} placeholder={<Skeleton.Image />} loading={!manager}>
            <Card
              title="结果展示"
              headerExtraContent={
                <Button
                  loading={loading}
                  onClick={() => {
                    setLoading(true);
                    fetchData();
                  }}
                  size="small"
                >
                  重新测试
                </Button>
              }
            >
              <ResultRender manager={manager} />
            </Card>
          </Skeleton>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Table columns={historyColumns} dataSource={manager?.history} />
        </Col>
      </Row>
    </div>
  );
};

export default Page;
