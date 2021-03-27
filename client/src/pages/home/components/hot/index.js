import React, { useState, useEffect } from 'react';
import data from './mock.json';

export default function (props) {
  // const [houses, setHouses] = useState(data);

  useEffect(() => {}, []);

  return (
    <div className="hot">
      <h1>热门推荐</h1>
      <div className="hot-lists">
        {props?.houses?.map((house) => (
          <div className="hot-lists-item" key={house.id}>
            <img className="img" src={house.img} alt={house.title} />
            <div className="title">{house.title} </div>
            <div className="info">{house.info}</div>
            <div className="price">{house.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
