import React, { useState, useEffect, memo } from 'react';
import data from './mock.json';
import { history } from 'umi'

function Hot(props) {
  console.log(props)
  const handleClick = id => {
    history.push({
      pathname: '/house',
      query: {
        id
      }
    })
  }
  
  return (
    <div className="hot">
      <h1>热门推荐</h1>
      <div className="hot-lists">
        {props?.houses?.map((house) => (
          <div className="hot-lists-item" key={house.id} onClick={() => handleClick(house.id)}>
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
function areEqual(prevProps, nextProps) {
  if (prevProps.houses === nextProps.houses && prevProps.housesLoading === nextProps.housesLoading) {
    return true;
  }
}

export default memo(Hot, areEqual);