import React, { useState, useEffect, useCallback } from 'react';
import Button from './Button';

export default function(props) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {}, []);

  const handleClickBtn1 = () => {setCount1(count1 + 1)};
  const handleClickBtn2 = useCallback(() => {setCount2(count2 + 1)}, [count2])
  return (
    <div>
      <Button onClickButton={handleClickBtn1}>Button1</Button>
      <hr />
      <Button onClickButton={handleClickBtn2}>Button2</Button>
      <h1>count1: {count1}</h1>
      <h1>count2: {count2}</h1>
    </div>
  );
}
