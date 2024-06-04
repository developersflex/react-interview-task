import React from 'react';
import './SearchInput.scss';
import { MagnifyingGlass } from '@phosphor-icons/react';
export const SearchInput = ({ ...props }) => {
  return (
    <div className='search-input'>
      <MagnifyingGlass size={16} fill='#EAEAEA' />
      <input
        {...props}
        className='search-input__input'
        type='text'
        placeholder='Search a driver'
      />
    </div>
  );
};
