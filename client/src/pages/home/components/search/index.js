import React, { useState, useEffect } from 'react';
import { Picker, List, Button, Calendar } from 'antd-mobile';
import dayjs from 'dayjs';

const defaultCitys = [
  [
    { label: '杭州', value: '10001' },
    { label: '深圳', value: '10002' },
  ],
];
export default function (props) {
  const [citys, setCitys] = useState(defaultCitys);
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
    setTimes(
      dayjs(startTime).format('YYYY-MM-DD') +
        ' - ' +
        dayjs(endTime).format('YYYY-MM-DD'),
    );
    setDataShow(!dataShow);
  };

  const handleSearch = () => {};

  return (
    <div className="search">
      {/* 可选城市 */}
      <div className="search-addr">
        <Picker
          title="城市"
          data={citys}
          value={selectedCity}
          cascade={false}
          cols={1}
          onChange={handleCityChange}
        >
          <List.Item>可选城市</List.Item>
        </Picker>
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
      <Calendar
        visible={dataShow}
        onCancel={handleData}
        onConfirm={handleDataConfirm}
      ></Calendar>
    </div>
  );
}