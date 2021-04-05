import React, { useState, useEffect } from 'react';
import { ShowLoading } from '@/components';
import { Timer } from '@/utils';

export default function (props) {

  return (
    <div className="comment">
      <h1 className="comment-title">评论</h1>
      <div className="comment-lists">
        {props?.lists?.map((item) => (
          <div className="comment-lists-item" key={item.id}>
            <img src={item?.user?.avatar || require('../../../../assets/yay.jpg')} alt="lists" className="avatar" />
            <div className="right">
              <div className="right-top">
                <p>{item?.user?.username}</p>
                <p>{Timer(item.createTime)}</p>
              </div>
              <div className="right-bottom">{item?.msg}</div>
            </div>
          </div>
        ))}
        <ShowLoading showLoading={props?.showLoading}></ShowLoading>
      </div>
    </div>
  );
}
