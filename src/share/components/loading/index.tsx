import { Spin } from '@douyinfe/semi-ui';
import styles from './index.module.less';

export const Loading = ({ visible }: { visible: boolean }) =>
  visible ? (
    <div className={styles.modal}>
      <Spin />
      <span>加载中</span>
    </div>
  ) : null;
