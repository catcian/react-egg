import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Info from './components/Info';
import Lists from './components/Lists';
import Footer from './components/Footer';
import { useStoreHook } from 'think-react-store';
import { useObserverHook } from '@/hooks';
import { CommonEnum } from '@/enums';
import './index.less';

export default function (props) {
  const {
    house: { detail, getDetailAsync },
  } = useStoreHook();

  useObserverHook(CommonEnum.LOADING_ID, (entries) => {
    console.log('entries', entries);
  });

  useEffect(() => {
    getDetailAsync({});
  }, []);

  return (
    <div className="house-page">
      {/* banner */}
      <Banner banner={detail?.banner}></Banner>
      {/* 房屋信息 */}
      <Info detail={detail?.info}></Info>
      {/* 评论 */}
      <Lists></Lists>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}
