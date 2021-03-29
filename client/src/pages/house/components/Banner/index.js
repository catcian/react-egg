import React, { useState, useEffect } from 'react';
import AwesomeSwiper from 'react-awesome-swiper';

export default function (props) {
  const [config, setConfig] = useState({
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  return (
    <AwesomeSwiper className="banner" config={config}>
      <div className="swiper-wrapper">
        {props?.banner?.map((item, index) => (
          <div className="swiper-slide" key={index}>
            <img src={item} alt="house" />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </AwesomeSwiper>
  );
}
