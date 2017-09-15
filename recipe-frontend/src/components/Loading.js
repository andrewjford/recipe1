import React from 'react';

const Loading = (props) => {

  const Spinner = require('react-spinkit');

  if(!props.loaded){
    return <Spinner name='ball-spin-fade-loader' />
  }
  else{
    return null
  }
}

export default Loading;
