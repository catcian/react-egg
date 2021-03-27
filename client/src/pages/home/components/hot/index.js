import React, { useState, useEffect } from 'react';
import data from './mock.json';

export default function (props) {
  const [houses, setHouses] = useState(data);

  useEffect(() => {}, []);

  return (
    <div className="hot">
      <div className="hot-lists">
        {houses.map((house) => (
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
