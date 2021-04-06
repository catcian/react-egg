import React, { useState, useEffect } from 'react';
import { Button } from 'antd-mobile';
import { Timer } from '../../../../utils';
export default function (props) {
  
  const renderBtn = () => {
    // props.order 没有id 没有预定订单
    if(!props.order?.id) {
      return <Button className="info-btn" type="warning" onClick={() => props.btnClick()}>
      预定
    </Button>
    }
    // props.order.isPayed === 0 未支付
    if (props.order?.isPayed === 0) {
      return <Button className="info-btn" type="ghost" onClick={() => props.btnClick(props.order?.id)}>
      取消预定
    </Button>
    }
    // props.order.isPayed === 1 已支付
    if(props.order?.isPayed === 1) {
      return <Button className="info-btn" type="ghost">
      已经支付
    </Button>
    }
  }

  return (
    <div className="info">
      <div className="info-title">{props?.detail?.name}</div>
      <div className="info-msg">简介：{props?.detail?.info}</div>
      <div className="info-price">价格：{props?.detail?.price}</div>
      <div className="info-time">预定时间：{Timer(props?.detail?.publishTime)}</div>
      <div className="info-time">开始出租时间：{Timer(props?.detail?.startTime, '')}</div>
      <div className="info-time">结束出租时间：{Timer(props?.detail?.endTime, '')}</div>
      { renderBtn() }
    </div>
  );
}
