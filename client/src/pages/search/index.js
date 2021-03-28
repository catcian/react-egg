import React, { useState, useEffect } from 'react';
import { useHttpHook, useObserverHook } from '@/hooks';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import './index.less';

export default function (props) {
  const [houseName, setHouseName] = useState('');
  const [page, setPage] = useState({
    pageSize: 8,// 每页展示数码
    pageNum: 1,// 当前页码
  });
  const [houseLists, setHouseLists] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [houses, loading] = useHttpHook({
    url: '/house/search',
    body: {
      ...page,
    },
    watch: [page.pageNum],
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
      } else {
        setShowLoading(false);
      }
    }
  }, [loading]);

  const handleChange = (value) => {
    setHouseName(value);
  };

  const handleCancel = () => {
    setHouseName('');
  };

  const handleSubmit = () => {
    console.log('1233');
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
