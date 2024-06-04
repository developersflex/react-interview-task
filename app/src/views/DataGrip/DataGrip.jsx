import React from 'react';
import { NoServiceFound } from '../../components/NoServiceFound/NoServiceFound';
import './DataGrip.scss';
export const DataGrip = () => {
  return (
    <div className='no-data'>
      <div className='no-data-header'>
        <h2>Data Grip</h2>
      </div>
      <NoServiceFound
        description={'Please select a service on your left to proceed.'}
        title={'No Service Selected'}
      />
    </div>
  );
};
