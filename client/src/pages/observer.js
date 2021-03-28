import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { useObserverHook } from '@/hooks';

let observer;
export default function (props) {
  const [state, setState] = useState();

  useObserverHook('#loading', (entries) => {
    console.log(entries);
  });
  // useEffect(() => {
  //   console.log('进入页面')
  //   const elem = document.querySelector('#loading')
  //   observer = new IntersectionObserver(entries => {
  //     console.log(entries)
  //   });
  //   observer.observe(elem);

  //   return () => {
  //     console.log('离开页面')
  //     if(observer){
  //       // 解绑元素
  //       observer.unobserve(elem);
  //       // 停止监听
  //       observer.disconnect();
  //     }
  //   }
  // }, [])

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div>
      observer
      <button onClick={handleClick}>首页</button>
      <div
        id="loading"
        style={{
          width: '200px',
          height: '200px',
          background: '#f60',
          marginTop: '1000px',
        }}
      ></div>
    </div>
  );
}
