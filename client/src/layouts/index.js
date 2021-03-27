import styles from './index.css';
import { MenuBar, ErrorBoundary } from '@/components'
import { useLocation } from 'umi'

function BasicLayout(props) {
  const location = useLocation()
  const path = ['/', '/order', '/user']

  return (
    <div>
      <MenuBar show={path.includes(location.pathname)} pathname={location.pathname}></MenuBar>
      <ErrorBoundary>
        {props.children}
      </ErrorBoundary>
    </div>
  );
}

export default BasicLayout;
