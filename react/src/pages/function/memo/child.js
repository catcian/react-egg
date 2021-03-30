import React, { useState, useEffect } from 'react';

export default function(props) {
  console.log('--- child re-render ---');

  useEffect(() => {}, []);

  return (
    <div>
      <p>number is {props.number} </p>
    </div>
  );
}
