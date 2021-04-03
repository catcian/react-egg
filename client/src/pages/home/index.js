import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Search from './components/search';
import Hot from './components/hot';
import './index.less';
import { useHttpHook } from '@/hooks';
import { ErrorBoundary } from '@/components';

export default function (props) {
  const [citys, citysLoading] = useHttpHook({
    url: '/commons/citys',
  });
  const [houses, housesLoading] = useHttpHook({
    url: '/house/hot',
  });
  

  return (
    <ErrorBoundary>
      <div className="home">
        <Header></Header>
        { citys && <Search citys={citys} citysLoading={citysLoading}></Search>}
        { houses && <Hot houses={houses} housesLoading={housesLoading}></Hot>}
      </div>
    </ErrorBoundary>
  );
}
