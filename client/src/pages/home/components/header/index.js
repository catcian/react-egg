import React, { useState, useEffect } from 'react';
import { Link } from 'umi'

export default function(props){
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className="header">
      <div className="header-title">民宿</div>
      <div className="header-login">
          <Link to="/login">登陆</Link>
          <Link to="/register">注册</Link>
      </div>
    </div>
  )
}