import { useEffect } from 'react';
import { isEmpty } from 'project-libs'

let observer;
export default function useImgHook(elem, callback, watch = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll(elem);
    if (!isEmpty(nodes)) {
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
      if (!isEmpty(nodes) && observer) {
        nodes.forEach(item => {
          observer.unobserve(item)
        })
      }
    }
  }, watch);
}
