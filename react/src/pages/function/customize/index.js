import React, { useState, useEffect } from 'react';
import { useTitleHook, useHttpHook } from '@/hooks'
import { List } from 'antd-mobile'

export default function(props){
  const [state, setState] = useState('customize')
  const title = useTitleHook(state)

  const [result, loading] = useHttpHook({
    url: 'getListsAsync',
    watch: [state]
  })

  const handleClick = () => {
    setState('customize next')
  }

  return (
    <div>
        <h1 onClick={handleClick}>{title}</h1>
        <h1>result:</h1>
        <List>
          { result && result.lists.map((item, index) => {
            return <List.Item key={index}>{ item }</List.Item>
          })}
        </List>
    </div>
  )
}