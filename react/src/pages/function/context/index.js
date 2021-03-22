import React, { useState, useEffect } from 'react';
import App from './app'
import { UserContextPrivider } from './userContext'

export default function(props){

  return (
    <UserContextPrivider>
      <App {...props}></App>
    </UserContextPrivider>
  )
}