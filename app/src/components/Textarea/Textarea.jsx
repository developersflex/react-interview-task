import React from 'react';
import './Textarea.scss';
export const Textarea = ({ className = '', ...props }) => {
  return <textarea className={`kit-textarea ${className}`} {...props} />;
};
