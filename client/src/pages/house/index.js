import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Info from './components/Info';
import Lists from './components/Lists';
import Footer from './components/Footer';
import { useStoreHook } from 'think-react-store';
import { useObserverHook } from '@/hooks';
import { CommonEnum } from '@/enums';
import { useLocation } from 'umi'
import './index.less';

export default function (props) {
  const {query} = useLocation()
  const {
    house: {
      detail,
      comments,
      showLoading,
      getDetailAsync,
      getCommentsAsync,
      reloadComments,
      reloadCommentsNum,
      resetData,
      order,
      hasOrdersAsync,
      addOrdersAsync,
      delOrderAsync,
    },
  } = useStoreHook();

  useObserverHook(
    CommonEnum.LOADING_ID,
    entries => {
      if (
        comments &&
        comments.length &&
        showLoading &&
        entries[0].isIntersecting
      ) {
        reloadComments();
      }
    },
    [comments, showLoading],
  );

  useEffect(() => {
    getDetailAsync({
      id: query?.id
    });
  }, []);

  useEffect(() => {
    getCommentsAsync({
      houseId: query?.id
    });
  }, [reloadCommentsNum]);

  useEffect(() => {
    hasOrdersAsync({
      houseId: query?.id
    })
  }, [])

  useEffect(() => {
    return () => {
      resetData({
        detail: {}
      })
    }
  }, [])

  const handleBtnClick = id => {
    if (!id) {
      addOrdersAsync({
        houseId: query?.id
      })
    } else {
      delOrderAsync({
        houseId: query?.id
      })
    }
  }

  return (
    <div className="house-page">
      {/* banner */}
      <Banner banner={detail?.banner}></Banner>
      {/* 房屋信息 */}
      <Info detail={detail?.info} order={order} btnClick={handleBtnClick}></Info>
      {/* 评论 */}
      <Lists lists={comments} showLoading={showLoading}></Lists>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}
