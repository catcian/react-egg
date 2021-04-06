import React, { useState, useEffect } from 'react';
import OrderItem from '../Item';
import { ActivityIndicator } from 'antd-mobile';
import { isEmpty } from 'project-libs';
import { ShowLoading } from '@/components'
import { OrderSkeletons } from '@/skeletons'

export default function (props) {
  const [state, setState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setState(true)
    }, 1500)
  }, []);
  return (
    <div>
      {isEmpty(props?.orders) ? (
        <> { state ? <ShowLoading showLoading={props.showLoading}></ShowLoading> : <OrderSkeletons></OrderSkeletons>} </>
      ) : (
        <div className="tab-lists">
          {props.orders.map((item) => (
            <OrderItem type={props.type} key={item.id} {...item}></OrderItem>
          ))}
          <ShowLoading showLoading={props.showLoading}></ShowLoading>
        </div>
      )}
      {/* <OrderSkeletons></OrderSkeletons> */}
    </div>
  );
}

