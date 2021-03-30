import React, { useState, useEffect, memo } from 'react';

function ChildMemo(props) {
  console.log('--- memo re-render ---');

  useEffect(() => {}, []);

  return (
    <div>
      <p>number is {props.number} </p>
    </div>
  );
}

function areEqual(prevProps, nextProps) {
  // return true 不进行渲染
  if (prevProps.number === nextProps.number) {
    return true;
  } 
  // else {
  // }
  return false;
}
export default memo(ChildMemo, areEqual);
