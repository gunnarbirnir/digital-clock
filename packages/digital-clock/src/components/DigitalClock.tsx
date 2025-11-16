import React, { useEffect, useState } from 'react';
import Number from './Number';
import type { NumberValue } from '../types';

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
  const [time, setTime] = useState(new Date());
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
      <Number {...numberProps} value={hours[0] as NumberValue} />
      <Number {...numberProps} value={hours[1] as NumberValue} />
      <div style={{ width: 20 }} />
      <Number {...numberProps} value={minutes[0] as NumberValue} />
      <Number {...numberProps} value={minutes[1] as NumberValue} />
    </div>
  );
};

export default DigitalClock;
