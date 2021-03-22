import React, { useState } from 'react';
import { useTitleHook } from '@/hooks'

export default function(props){
  const [state, setState] = useState('customize')
  const title = useTitleHook(state)

  const handleClick = () => {
    setState('customize next')
  }
  return (
    <div>
        <h1 onClick={handleClick}>{title}</h1>
    </div>
  )
}