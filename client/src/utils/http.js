import { Toast } from 'antd-mobile';
import { history } from 'umi'
import { urlGet } from 'project-libs'

export default function Http({ url, method = 'POST', headers, body, setResult, setLoading }) {
  setLoading && setLoading(true);
  const token = localStorage.getItem('token')
  let defaultHeader = {
    'Content-Type': 'application/json',
  };
  defaultHeader = token ? {
    ...defaultHeader,
    token
  } : defaultHeader;

  let params;
  if (method.toUpperCase() === 'GET') {
    params = undefined;
  } else {
    params = {
      headers: {
        ...defaultHeader,
        headers,
      },
      method,
      body: JSON.stringify(body),
    };
  }

  return new Promise((resolve, reject) => {
    fetch('/api' + url, params)
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.status === 200) {
          resolve(resp.data);
          setResult && setResult(resp.data);
        } else if(resp.status === 10001) {
          localStorage.clear()
          Toast.fail(resp.errMsg)
          reject(resp.errMsg)
          const pathname = location.pathname
          setTimeout(() => {
            let query = {
              from: pathname
            }
            if (pathname === '/house') {
              query = {
                ...query,
                id: urlGet('id')
              }
            }
            history.push({
              pathname: '/login',
              query,
            })
          }, 1500)
        } else {
          Toast.fail(resp.errMsg);
          reject(resp.errMsg);
        }
      })
      .catch((err) => {
        console.log('err', err);
        Toast.fail(err.errMsg);
        reject(err.errMsg);
      })
      .finally(() => {
        setLoading && setLoading(false);
      });
  });
}
