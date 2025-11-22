import React from 'react';
import type { NumberValue } from '../types';
import DotsContainer from './DotsContainer';
import Number from './Number';
import { getFormattedTime } from '../utils';

interface ClockNumbersProps {
  time: Date;
  height: number;
  numberThickness: number;
  numberInset: number;
  numberViewBoxHeight: number;
  activeColor: string;
  inactiveColor: string;
  baseSizeUnit: number;
}

const ClockNumbers = ({
  time,
  height,
  numberThickness,
  numberInset,
  numberViewBoxHeight,
  activeColor,
  inactiveColor,
  baseSizeUnit,
}: ClockNumbersProps) => {
  const { hours, minutes } = getFormattedTime(time);

  const numberProps = {
    height,
    thickness: numberThickness,
    inset: numberInset,
    viewBoxHeight: numberViewBoxHeight,
    activeColor,
    inactiveColor,
  };

  return (
    <div style={{ display: 'flex', gap: baseSizeUnit * 2 }}>
      <Number {...numberProps} value={hours[0] as NumberValue} />
      <Number {...numberProps} value={hours[1] as NumberValue} />
      <DotsContainer
        color={activeColor}
        baseSizeUnit={baseSizeUnit}
        inset={numberInset}
        numberHeight={height}
        numberViewBoxHeight={numberViewBoxHeight}
      />
      <Number {...numberProps} value={minutes[0] as NumberValue} />
      <Number {...numberProps} value={minutes[1] as NumberValue} />
    </div>
  );
};

export default ClockNumbers;
