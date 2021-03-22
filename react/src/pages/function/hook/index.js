import React, { useState, useEffect, useLayoutEffect, useMemo, useCallback } from 'react';
/* 
useEffect 接收两个参数，第一个是函数，第二个是依赖项的数组，并且第二项是非必选项。
因此存在三种情况：
1. 没有依赖性，在组件渲染执行适合，和每次修改属性都会被执行
1. 如果为空数组，在组件初始化时只会执行一次，
1. 有依赖项，数组有依赖项，并且依赖项的值发生改变的时候useEffect方法回重新被执行

useEffect如何执行异步操作：
1. fetch('/api/getLists)
2. 并不支持 async/await
2.1 async 方法写在 useEffect 内部
2.2 async 方法写在 useEffect 内部 
 */
export default function(props){
  const [count, setCount] = useState(0)
  const [text, setText] = useState('text')

  useEffect(() => {
    console.log('useEffect')
  }, [count])
  

  // useEffect 如何执行异步操作
  async function demo () {
    console.log('demo')
  }

  useEffect(() => {
    // fetch('/api/getLists')
    // 2.1 async 方法写在 useEffect 内部
    // async function demo () {
    //   console.log('demo')
    // }
    demo()
  }, [])

  useLayoutEffect(()=>{
    console.log('useLayoutEffect')
  }, [])

  // const handleCount = () => {
  //   setCount(count+1)
  // }

  const handleCount = useCallback(()=>{
    console.log('count changed')
    setCount(count+1)
  }, [count])


  const noCacheText = () => {
    // 在组件当中，当属性改变的时候其余的组件同时会被重复的渲染
    console.log('text changed')
    return text
  }

  const memoText = useMemo(()=>{
    console.log('text changed2')
    return text
  }, [text])

  return (
    <div>
      <h1 onClick={handleCount}>count: {count}</h1>
      {/* <h1>text: {noCacheText()}</h1> */}
      <h1>text: {memoText}</h1>
    </div>
  )
}