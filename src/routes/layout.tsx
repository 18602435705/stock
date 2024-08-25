import { Outlet } from '@modern-js/runtime/router';
import 'reset-css';

const Layout = (): JSX.Element => (
  <div>
    <Outlet />
  </div>
);

export default Layout;
