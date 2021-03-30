import React, { useState, useEffect, useMemo } from 'react';

export default function(props){
  console.log('--- component childUseMemo re-render ---');

  useEffect(() => {}, []);

  return useMemo(() => {
    console.log('--- useMemo childUseMemo re-render ---');
    return (
      <div>
        <p>number is {props.number} </p>
      </div>
    );
  }, [props.number])

}