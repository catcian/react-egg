import { useEffect } from 'react';

let observer;
export default function useImgHook(elem, callback, watch = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll(elem);
    if (nodes && nodes.length) {
      observer = new IntersectionObserver((entries) => {
        callback && callback(entries);
        entries.forEach((item) => {
          if (item.isIntersecting) {
            const dataSrc = item.target.getAttribute('data-src');
            item.target.setAttribute('src', dataSrc);
            observer.unobserve(item.target);
          }
        });
      });

      nodes.forEach((item) => {
        observer.observe(item);
      });
    }

    return () => {
      if (nodes && nodes.length && observer) {
        nodes.forEach(item => {
          observer.unobserve(item)
        })
      }
    }
  }, watch);
}
