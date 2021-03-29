import React, { useState, useEffect } from 'react';
import AwesomeSwiper from 'react-awesome-swiper';

export default function (props) {
  const [config, setConfig] = useState({
    loop: true,
    // autoplay: {
    //   delay: 1500,
    // },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  useEffect(() => {}, []);

  return (
    <AwesomeSwiper className="banner" config={config}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src={
              'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png'
            }
            alt="house"
          />
        </div>
        <div className="swiper-slide">
          <img
            src={
              'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg'
            }
            alt="house"
          />
        </div>
        <div className="swiper-slide">
          <img
            src={
              'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg'
            }
            alt="house"
          />
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </AwesomeSwiper>
  );
}
