import React, { useState, useEffect } from 'react';
import { Button } from 'antd-mobile';
import { Timer } from '../../../../utils';
export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  const handleClick = () => {};

  return (
    <div className="info">
      <div className="info-title">{props?.detail?.name}</div>
      <div className="info-msg">简介：{props?.detail?.info}</div>
      <div className="info-price">价格：{props?.detail?.price}</div>
      <div className="info-time">预定时间：{Timer(props?.detail?.publishTime)}</div>
      <div className="info-time">开始出租时间：{Timer(props?.detail?.startTime, '')}</div>
      <div className="info-time">结束出租时间：{Timer(props?.detail?.endTime, '')}</div>
      <Button className="info-btn" type="warning" onClick={handleClick}>
        预定
      </Button>
    </div>
  );
}
