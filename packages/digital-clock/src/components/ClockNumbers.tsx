import React from 'react';
import type { NumberValue } from '../types';
import DotsContainer from './DotsContainer';
import Number from './Number';

interface ClockNumbersProps {
  time: Date;
  height: number;
  numberThickness: number;
  numberInset: number;
  numberViewBoxHeight: number;
  activeColor: string;
  inactiveColor: string;
  baseSpacing: number;
}

const ClockNumbers = ({
  time,
  height,
  numberThickness,
  numberInset,
  numberViewBoxHeight,
  activeColor,
  inactiveColor,
  baseSpacing,
}: ClockNumbersProps) => {
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');

  const numberProps = {
    height,
    thickness: numberThickness,
    inset: numberInset,
    viewBoxHeight: numberViewBoxHeight,
    activeColor,
    inactiveColor,
  };

  return (
    <div style={{ display: 'flex', gap: baseSpacing * 2 }}>
      <Number {...numberProps} value={hours[0] as NumberValue} />
      <Number {...numberProps} value={hours[1] as NumberValue} />
      <DotsContainer
        color={activeColor}
        size={numberThickness}
        inset={numberInset}
        baseSpacing={baseSpacing}
        viewBoxHeight={numberViewBoxHeight}
      />
      <Number {...numberProps} value={minutes[0] as NumberValue} />
      <Number {...numberProps} value={minutes[1] as NumberValue} />
    </div>
  );
};

export default ClockNumbers;
