import { cookie } from 'project-libs';
import { history } from 'umi';
export function onRouteChange(route) {
  const nowPath = route.routes[0].routes.find((item) => item.path === route.location.pathname);
  const isLogin = localStorage.getItem('token')
  if (nowPath && nowPath.auth && !isLogin) {
    history.push({
      pathname: '/login',
      query: {
        from: route.location.pathname,
      },
    });
  }
}
