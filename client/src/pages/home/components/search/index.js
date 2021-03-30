import React, { useState, useEffect, memo } from 'react';
import { Picker, List, Button, Calendar, Toast } from 'antd-mobile';
import dayjs from 'dayjs';
import { history } from 'umi';
import defaultCitys from './citys.json';

function Search(props) {
  // console.log('search re-render');
  // console.log(props); 
  const [selectedCity, setSelectedCity] = useState(['10001']);
  const [times, setTimes] = useState('可选时间');
  const [dataShow, setDataShow] = useState(false);

  useEffect(() => {}, []);

  const handleCityChange = (value) => {
    setSelectedCity(value);
  };

  const handleData = () => {
    setDataShow(!dataShow);
  };

  const handleDataConfirm = (startTime, endTime) => {
    setTimes(dayjs(startTime).format('YYYY-MM-DD') + ' - ' + dayjs(endTime).format('YYYY-MM-DD'));
    setDataShow(!dataShow);
  };

  const handleSearch = () => {
    if (!times.includes(' - ')) {
      Toast.fail('请选择时间');
    } else {
      history.push({
        pathname: '/search',
        query: {
          code: selectedCity[0],
          startTime: times.split(' - ')[0],
          endTime: times.split(' - ')[1],
        },
      });
    }
  };

  return (
    <div className="search">
      {/* 可选城市 */}
      <div className="search-addr">
        {!props.citysLoading && (
          <Picker
            title="城市"
            data={props.citys}
            value={selectedCity}
            cascade={false}
            cols={1}
            onChange={handleCityChange}
          >
            <List.Item>可选城市</List.Item>
          </Picker>
        )}
      </div>
      {/* 可选时间 */}
      <div className="search-time" onClick={handleData}>
        <p className="search-time-left">出租时间</p>
        <p className="search-time-right">{times}</p>
      </div>
      {/* 点击按钮 */}
      <Button type="warning" onClick={handleSearch} size="large">
        搜索民宿
      </Button>
      <Calendar visible={dataShow} onCancel={handleData} onConfirm={handleDataConfirm}></Calendar>
    </div>
  );
}

function areEqual(prevProps, nextProps) {
  if (prevProps.citys === nextProps.citys && prevProps.citysLoading === nextProps.citysLoading) {
    return true;
  }
}

export default memo(Search, areEqual);
