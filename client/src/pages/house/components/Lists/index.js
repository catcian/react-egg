import React, { useState, useEffect } from 'react';

export default function(props){
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className="comment">
      <h1 className="comment-title">评论</h1>
      <div className="comment-lists">
        <div className="comment-lists-item">
          <img src="http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg" alt="lists" className="avatar"/>
          <div className="right">
            <div className="right-top">
              <p>user</p>
              <p>time</p>
            </div>
            <div className="right-bottom">
              info
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}