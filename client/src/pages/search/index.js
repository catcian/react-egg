import React, { useState, useEffect } from 'react';
import { useHttpHook, useObserverHook } from '@/hooks';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import { useLocation } from 'umi'
import './index.less';

export default function (props) {
  const [houseName, setHouseName] = useState('');
  const [page, setPage] = useState({
    pageSize: 8, // 每页展示数码
    pageNum: 1, // 当前页码
  });
  const [houseLists, setHouseLists] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [houseSubmitName, setHouseSubmitName] = useState('');
  const { query } = useLocation()
  console.log(query)
  const [houses, loading] = useHttpHook({
    url: '/house/search',
    body: {
      ...page,
      houseName,
      code: query?.code,
      startTime: query?.startTime + ' 00:00:00',
      endTime: query?.endTime + ' 00:00:00',
    },
    watch: [page.pageNum, houseSubmitName],
  });

  useObserverHook(
    '#loading',
    (entries) => {
      console.log('entries', entries[0].isIntersecting);
      // 当页面内loading进入可视区域
      if (!loading && entries[0].isIntersecting) {
        setPage({
          ...page,
          pageNum: page.pageNum + 1,
        });
      }
    },
    null,
  );

  useEffect(() => {
    if (!loading && houses) {
      if (houses.length) {
        setHouseLists([...houseLists, ...houses]);
        if (houses.length < page.pageSize) {
          setShowLoading(false);
        }
      } else {
        setShowLoading(false);
      }
    }
  }, [loading]);

  const handleChange = (value) => {
    setHouseName(value);
  };

  const _handleSumbmit = (value) => {
    if (!value) {
      setHouseName(value);
      return 
    }
    setHouseSubmitName(value);
    setPage({
      pageSize: 8,
      pageNum: 1,
    });
    setHouseLists([]);
  };

  const handleCancel = () => {
    _handleSumbmit('');
  };

  const handleSubmit = (value) => {
    _handleSumbmit(value);
  };
  return (
    <div className="search-page">
      {/* 顶部搜索栏 */}
      <SearchBar
        placeholder="搜索民宿"
        value={houseName}
        onChange={handleChange}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      ></SearchBar>
      {/* 搜索结构 */}
      {!houseLists.length ? (
        <ActivityIndicator toast></ActivityIndicator>
      ) : (
        <div className="result">
          {houseLists.map((house) => (
            <div className="item" key={house.id}>
              <img src={house.img} alt="img" />
              <div className="item-right">
                <div className="title">{house.title}</div>
                <div className="price">{house.price}</div>
              </div>
            </div>
          ))}
          {showLoading ? (
            <div id="loading">加载中～</div>
          ) : (
            <div>没有更多数据啦～</div>
          )}
        </div>
      )}
    </div>
  );
}
