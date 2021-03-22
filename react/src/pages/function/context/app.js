import React, { useState, useEffect, useContext } from 'react';
import User from './user'
import { Button } from 'antd-mobile'
import { UserContext } from './userContext'

export default function(props){
  const { state, dispatch } = useContext(UserContext)

const handleLogin = () => {
  dispatch({
    type: 'LOGIN',
    payload: true
  })
}
  return (
    <div>
      { state.isLogin ? <User></User> : <Button type="primary" onClick={handleLogin}>登陆</Button> }
    </div>
  )
}