import React, { useState, useEffect } from 'react';
import { useStoreHook, useStateHook, useDispatchHook } from 'think-react-store'

export default function(props){
  // const { user: {id, username, getUserAsync }} = useStoreHook()
  const { id, username } = useStateHook('user')
  const dispatchs = useDispatchHook()

  useEffect(() => {

  }, [])

  const handleClick = () => {
    dispatchs(() => ({
      key: 'user',
      type: 'getUserAsync',
      payload: {
        id: '03',
        username: 'CatCian3'
      }
    }))
    // getUserAsync({
    //   id: '02',
    //   username: 'CatCian2'
    // })
  }

  return (
    <div>
      <h1>user</h1>
      <h1>user-id: { id }</h1>
      <h1>user-username: { username }</h1>
      <button onClick={handleClick}>修改</button>
    </div>
  )
}