import React, { useState, useEffect } from 'react';
import { useHttpHook } from '@/hooks';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import './index.less';

export default function (props) {
  const [houseName, setHouseName] = useState('');
  const [houses, loading] = useHttpHook({
    url: '/house/search',
  });
  useEffect(() => {}, []);

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
      <div className="result">
        {loading ? (
          <ActivityIndicator toast></ActivityIndicator>
        ) : (
          houses.map((house) => (
            <div className="item" key={house.id}>
              <img src={house.img} alt="img" />
              <div className="item-right">
                <div className="title">{house.title}</div>
                <div className="price">{house.price}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
