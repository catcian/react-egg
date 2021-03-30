import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Search from './components/search';
import Hot from './components/hot';
import './index.less';
import { useHttpHook } from '@/hooks';

export default function (props) {
  const [citys, citysLoading] = useHttpHook({
    url: '/commons/citys',
  });
  const [houses, housesLoading] = useHttpHook({
    url: '/house/hot',
  });
  

  return (
    <div className="home">
      <Header></Header>
      <Search citys={citys} citysLoading={citysLoading}></Search>
      <Hot houses={houses} housesLoading={housesLoading}></Hot>
    </div>
  );
}
