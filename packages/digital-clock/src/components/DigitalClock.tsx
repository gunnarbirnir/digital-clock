import React from 'react';
import Number from './Number';

const DigitalClock = () => {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <Number />
      <Number />
      <div style={{ width: 20 }} />
      <Number />
      <Number />
    </div>
  );
};

export default DigitalClock;
