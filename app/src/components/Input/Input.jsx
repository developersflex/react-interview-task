import React from 'react';
import './Input.scss';
export const Input = ({ ...props }) => {
  return <input className='kit-input' {...props} />;
};
