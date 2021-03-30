import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd-mobile';
import { useHttpHook } from '@/hooks';
import { CommonEnum } from '@/enums';
import Lists from './components/Lists';
import './index.less'

export default function (props) {
  const [tabs, setTabs] = useState([
    { title: '未支付', sub: '0' },
    { title: '已支付', sub: '1' },
  ]);
  const [page, setPage] = useState(CommonEnum.PAGE);
  const [orders] = useHttpHook({
    url: '/order/lists',
    body: { ...page },
  });

  console.log(orders)

  useEffect(() => {}, []);

  return (
    <div className="order-page">
      <Tabs tabs={tabs}>
        <div className="tab">
          <Lists orders={orders} type="0"></Lists>
        </div>
        <div className="tab">
          <Lists orders={orders} type="1"></Lists>
        </div>
      </Tabs>
    </div>
  );
}
