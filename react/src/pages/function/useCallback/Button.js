import React, { useState, useEffect, memo } from 'react';

function Button(props) {
  // console.log('--- button re-render ---')
  return (
    <div>
      <button onClick={props.onClickButton}>{props.children}</button>
      <p>{ Math.random() }</p>
    </div>
  );
}
function isEqual(prevProps, nextProps) {
  // if (prevProps.onClickButton === nextProps.onClickButton) return true
  // console.log(prevProps, nextProps,)
}
export default memo(Button, isEqual)