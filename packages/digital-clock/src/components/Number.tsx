import React from 'react';
import NumberPart from './NumberPart';
import {
  DEFAULT_NUMBER_HEIGHT,
  DEFAULT_NUMBER_THICKNESS,
  DEFAULT_NUMBER_INSET,
  DEFAULT_ACTIVE_COLOR,
  DEFAULT_INACTIVE_COLOR,
} from '../constants';
import { getNumberPartDimensions } from '../utils';

interface NumberProps {
  height?: number;
  thickness?: number;
  inset?: number;
  viewBoxHeight?: number;
  activeColor?: string;
  inactiveColor?: string;
}

const Number = ({
  height = DEFAULT_NUMBER_HEIGHT,
  thickness = DEFAULT_NUMBER_THICKNESS,
  inset = DEFAULT_NUMBER_INSET,
  viewBoxHeight = DEFAULT_NUMBER_HEIGHT,
  activeColor = DEFAULT_ACTIVE_COLOR,
  inactiveColor = DEFAULT_INACTIVE_COLOR,
}: NumberProps) => {
  // Actual dimensions
  const { partWidth, partHeight } = getNumberPartDimensions({
    numberHeight: height,
    numberThickness: thickness,
    viewBoxHeight,
  });
  const partOffset = partWidth / 2;
  const numberWidth = partHeight + partWidth;

  const partContainerStyle = {
    position: 'absolute',
    height: partHeight,
    width: partWidth,
    transformOrigin: 'top left',
  } as const;

  const numberPartProps = {
    height: partHeight,
    width: partWidth,
    thickness,
    inset,
    viewBoxHeight,
    activeColor,
    inactiveColor,
  };

  return (
    <div
      style={{
        height: height,
        width: numberWidth,
        position: 'relative',
      }}
    >
      <div
        style={{
          ...partContainerStyle,
          top: partOffset,
          left: 0,
        }}
      >
        <NumberPart {...numberPartProps} />
      </div>
      <div
        style={{
          ...partContainerStyle,
          bottom: partOffset,
          left: 0,
        }}
      >
        <NumberPart {...numberPartProps} />
      </div>
      <div
        style={{
          ...partContainerStyle,
          top: partOffset,
          right: 0,
        }}
      >
        <NumberPart {...numberPartProps} />
      </div>
      <div
        style={{
          ...partContainerStyle,
          bottom: partOffset,
          right: 0,
        }}
      >
        <NumberPart {...numberPartProps} />
      </div>
      <div
        style={{
          ...partContainerStyle,
          top: partWidth,
          left: partOffset,
          transform: 'rotate(-90deg)',
        }}
      >
        <NumberPart {...numberPartProps} />
      </div>
      <div
        style={{
          ...partContainerStyle,
          top: '50%',
          left: partOffset,
          transform: `rotate(-90deg) translateX(-${partOffset}px)`,
        }}
      >
        <NumberPart {...numberPartProps} />
      </div>
      <div
        style={{
          ...partContainerStyle,
          top: '100%',
          left: partOffset,
          transform: 'rotate(-90deg)',
        }}
      >
        <NumberPart {...numberPartProps} />
      </div>
    </div>
  );
};

export default Number;
