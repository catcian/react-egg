import React, { useState, useEffect } from 'react';
import { Toast } from 'antd-mobile';

export default function useHttpHook({
  url,
  method = 'POST',
  headers,
  body = {},
  watch = [],
}) {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);

  async function Http() {
    setLoading(true);
    const defaultHeader = {
      'Context-type': 'application/json',
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
            setResult(resp.data);
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
          setLoading(false);
        });
    });
  }

  useEffect(() => {
    Http();
  }, []);

  return [result, loading];
}
