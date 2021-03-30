import React, { useState, useEffect } from 'react';
import Child from './child'
import ChildMemo from './childMemo'
import ChildUseMemo from './childUseMemo'
export default function(props) {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {}, []);
  const handleSetStep = () => {
    setStep(step + 1);
  };
  const handleSetCount = () => {
    setCount(count + 1);
  };
  const handleCalNumber = () => {
    setNumber(step + count);
  };
  return (
    <div>
      <button onClick={handleSetStep}>step is : {step}</button>
      <button onClick={handleSetCount}>count is : {count}</button>
      <button onClick={handleCalNumber}>number is : {number}</button>
      <hr />
      <Child number={number}></Child>
      <ChildMemo number={number}></ChildMemo>
      <ChildUseMemo number={number}></ChildUseMemo>
    </div>
  );
}
