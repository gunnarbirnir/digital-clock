import React from 'react';
import Number from './Number';

interface DigitalClockProps {
  height?: number;
  numberThickness?: number;
  numberInset?: number;
  numberViewBoxHeight?: number;
  activeColor?: string;
  inactiveColor?: string;
}

const DigitalClock = ({
  height,
  numberThickness,
  numberInset,
  numberViewBoxHeight,
  activeColor,
  inactiveColor,
}: DigitalClockProps) => {
  const numberProps = {
    height,
    thickness: numberThickness,
    inset: numberInset,
    viewBoxHeight: numberViewBoxHeight,
    activeColor,
    inactiveColor,
  };

  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <Number {...numberProps} />
      <Number {...numberProps} />
      <div style={{ width: 20 }} />
      <Number {...numberProps} />
      <Number {...numberProps} />
    </div>
  );
};

export default DigitalClock;
