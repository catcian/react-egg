import React, { useState, useEffect } from 'react';
import { Button } from 'antd-mobile'
export default function(props){
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  const handleClick = () => {
    
  }

  return (
    <div className="info">
      <div className="info-title">title</div>
      <div className="info-msg">简介：</div>
      <div className="info-price">价格：</div>
      <div className="info-time">预定时间：</div>
      <div className="info-time">开始出租时间：</div>
      <div className="info-time">结束出租时间：</div>
      <Button className="info-btn" type="warning" onClick={handleClick}>预定</Button>
    </div>
  )
}