import { useEffect } from 'react';

let observer;
export default function useObserverHook(selectors, callback, watch = []) {
  
  useEffect(() => {
    const elem = document.querySelector(selectors)
    observer = new IntersectionObserver((entries) => {
      callback && callback(entries);
    });

    observer.observe(elem);
    return () => {
      if (observer) {
        // 解绑元素
        observer.unobserve(elem);
        // 停止监听
        observer.disconnect();
      }
    };
  }, watch);
}
