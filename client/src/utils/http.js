import { Toast } from 'antd-mobile';

export default function Http({
  url,
  method = 'POST',
  headers,
  body,
  setResult,
  setLoading,
}) {
  console.log(url, method, headers, body, )
  setLoading && setLoading(true);
  const defaultHeader = {
    'Content-Type': 'application/json',
  };
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
        } else {
          Toast.fail(resp.Msg);
          reject(resp.Msg);
        }
      })
      .catch((err) => {
        console.log('err', err);
        Toast.fail(err.Msg);
        reject(err.Msg);
      })
      .finally(() => {
        setLoading && setLoading(false);
      });
  });
}
