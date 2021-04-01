import React, { useState, useEffect, memo } from 'react';
import { Link } from 'umi';
import { cookie } from 'project-libs';
function Header (props) {
  const [username, setState] = useState(localStorage.getItem('username'))
  // console.log('header re-render');

  return (
    <div className="header">
      <div className="header-title">民宿</div>
      <div className="header-login">
        {username ? (
          <Link to="/user">{username}</Link>
        ) : (
          <>
            <Link to="/login">登陆</Link> | <Link to="/register">注册</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default memo(Header)