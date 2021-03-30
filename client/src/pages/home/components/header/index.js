import React, { useState, useEffect } from 'react';
import { Link } from 'umi';
import { cookie } from 'project-libs';
export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {
    cookie.get('user');
  }, []);

  return (
    <div className="header">
      <div className="header-title">民宿</div>
      <div className="header-login">
        {cookie.get('user') ? (
          <Link to="/user">{cookie.get('user').username}</Link>
        ) : (
          <>
            <Link to="/login">登陆</Link> | <Link to="/register">注册</Link>
          </>
        )}
      </div>
    </div>
  );
}
