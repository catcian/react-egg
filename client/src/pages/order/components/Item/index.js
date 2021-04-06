import React, { useState, useEffect } from 'react';
import { Button, Toast } from 'antd-mobile';
import { Timer } from '@/utils'
import Http from '../../../../utils/http';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  const handleBtnPay = async id => {
    const result = await Http({
      url: '/orders/pay',
      body: {
        id
      }
    })
    console.log(result)
    if (result) {
      Toast.success('支付成功')
      window.location.reload()
    } else {
      Toast.fail('支付失败')
    }
  }

  const handlePay = () => {
    switch (props.type) {
      case '0':
        return (
          <Button type="warning" size="small" onClick={() => handleBtnPay(props.id)}>
            去支付
          </Button>
        );
      case '1':
        return <Button size="small">已完成</Button>;

      default:
        break;
    }
  };

  return (
    <div className="order-item">
      <img src={props?.house_as?.imgs[0]?.url} alt="order" />
      <div className="center">
        <div className="title">{props?.house_as?.info}</div>
        <div className="price">{props?.house_as?.price}</div>
        <div className="time">{Timer(props?.createTime, '')}</div>
      </div>
      <div className="pay">{handlePay()}</div>
    </div>
  );
}
