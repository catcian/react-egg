import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd-mobile';
import { useHttpHook, useObserverHook } from '@/hooks';
import { CommonEnum } from '@/enums';
import Lists from './components/Lists';
import { Http } from '@/utils';
import { isEmpty } from 'project-libs';
import { ErrorBoundary } from '@/components';
import './index.less';

export default function (props) {
  const [tabs, setTabs] = useState([
    { title: '未支付', sub: '0' },
    { title: '已支付', sub: '1' },
  ]);
  const [page, setPage] = useState(CommonEnum.PAGE);
  const [orders, setOrders] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [tabsStatus, setTabsStatus] = useState('0')

  const invokeHttp = async (pageNum) => {
    const result = await Http({
      url: '/orders/lists',
      body: {
        ...page,
        pageNum,
        type: tabsStatus
      },
    });
    return result;
  };

  const invokeResetData = () => {
    setOrders([])
    setShowLoading(true)
    setPage(CommonEnum.PAGE)
  }

  useObserverHook(
    CommonEnum.LOADING_ID,
    async (entries) => {
      if (entries[0].isIntersecting) {
        const result = await invokeHttp(page.pageNum + 1);
        if (!isEmpty(orders) && !isEmpty(result) && result.length === page.pageSize) {
          setOrders([...orders, ...result]);
          setShowLoading(true);
          setPage({
            ...page,
            pageNum: page.pageNum + 1,
          });
        } else if (!isEmpty(orders) && !isEmpty(result)) {
          setOrders([...orders, ...result]);
          setShowLoading(false);
        } else {
          setShowLoading(false);
        }
      }
    },
    null,
  );

  const fetchOrder = async (pageNum) => {
    const result = await invokeHttp(pageNum)
    if (!isEmpty(result) && result.length === page.pageSize) {
      setOrders(result);
      setShowLoading(true);
    } else if (!isEmpty(result)) {
      setOrders(result);
      setShowLoading(false);
    } else {
      setShowLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder(1);
  }, [tabsStatus]);

  useEffect(() => {
    return () => {
      invokeResetData()
    }
  }, [])

  const handleChange = e => {
    setTabsStatus(e.sub)
    invokeResetData()
  }

  return (
    <ErrorBoundary>
      <div className="order-page">
        <Tabs tabs={tabs} onChange={handleChange}>
          <div className="tab">
            <Lists orders={orders} type="0" showLoading={showLoading}></Lists>
          </div>
          <div className="tab">
            <Lists orders={orders} type="1" showLoading={showLoading}></Lists>
          </div>
        </Tabs>
      </div>
    </ErrorBoundary>
  );
}
