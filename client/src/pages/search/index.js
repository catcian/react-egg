import React, { useState, useEffect } from 'react';
import { useHttpHook, useObserverHook, useImgHook } from '@/hooks';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import { useLocation } from 'umi';
import { ShowLoading } from '@/components';
import { CommonEnum } from '@/enums';
import { history } from 'umi'
import './index.less';

export default function (props) {
  const [houseName, setHouseName] = useState('');
  const [page, setPage] = useState(CommonEnum.PAGE);
  const [houseLists, setHouseLists] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [houseSubmitName, setHouseSubmitName] = useState('');
  const { query } = useLocation();
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

  useImgHook(
    '.item-img',
    (entries) => {
      // console.log(entries);
    },
    null,
  );

  useObserverHook(
    CommonEnum.LOADING_ID,
    (entries) => {
      // console.log('entries', entries[0].isIntersecting);
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
      return;
    }
    setHouseSubmitName(value);
    setPage(CommonEnum.PAGE);
    setHouseLists([]);
  };

  const handleCancel = () => {
    _handleSumbmit('');
  };

  const handleSubmit = (value) => {
    _handleSumbmit(value);
  };

  const handleClick = id => {
    history.push({
      pathname: '/house',
      query: {
        id
      }
    })
  }
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
            <div className="item" key={house.id} onClick={() => handleClick(house.id)}>
              <img
                className="item-img"
                data-src={house?.imgs[0]?.url}
                src={require('../../assets/blank.png')}
                alt="img"
              />
              <div className="item-right">
                <div className="title">{house.info}</div>
                <div className="price">{house.price}</div>
              </div>
            </div>
          ))}
          <ShowLoading showLoading={showLoading}></ShowLoading>
        </div>
      )}
    </div>
  );
}
