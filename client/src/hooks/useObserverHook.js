import { useEffect } from 'react';

let observer;
export default function useObserverHook(selectors, callback, watch=[]) {
  useEffect(() => {
    const elem = document.querySelector(selectors);
    if (elem) {
      observer = new IntersectionObserver(entries => {
        callback && callback(entries);
      });
      observer.observe(elem);
    }

    return () => {
      if (observer && elem) {
        // 解绑元素
        observer.unobserve(elem);
        // 停止监听
        observer.disconnect();
      }
    };
  }, watch);
}
