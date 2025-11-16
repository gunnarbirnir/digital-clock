import React, { memo } from 'react';
import NumberPart from './NumberPart';
import {
  DEFAULT_NUMBER_HEIGHT,
  DEFAULT_NUMBER_THICKNESS,
  DEFAULT_NUMBER_INSET,
  DEFAULT_ACTIVE_COLOR,
  DEFAULT_INACTIVE_COLOR,
  NUMBER_VALUES,
} from '../constants';
import { getNumberPartDimensions } from '../utils';
import type { NumberValue } from '../types';

interface NumberProps {
  value: NumberValue;
  height?: number;
  thickness?: number;
  inset?: number;
  viewBoxHeight?: number;
  activeColor?: string;
  inactiveColor?: string;
}

const Number = memo(
  ({
    value,
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
          <NumberPart
            {...numberPartProps}
            isActive={Boolean(NUMBER_VALUES[value][0])}
          />
        </div>
        <div
          style={{
            ...partContainerStyle,
            bottom: partOffset,
            left: 0,
          }}
        >
          <NumberPart
            {...numberPartProps}
            isActive={Boolean(NUMBER_VALUES[value][1])}
          />
        </div>
        <div
          style={{
            ...partContainerStyle,
            top: partWidth,
            left: partOffset,
            transform: 'rotate(-90deg)',
          }}
        >
          <NumberPart
            {...numberPartProps}
            isActive={Boolean(NUMBER_VALUES[value][2])}
          />
        </div>
        <div
          style={{
            ...partContainerStyle,
            top: '50%',
            left: partOffset,
            transform: `rotate(-90deg) translateX(-${partOffset}px)`,
          }}
        >
          <NumberPart
            {...numberPartProps}
            isActive={Boolean(NUMBER_VALUES[value][3])}
          />
        </div>
        <div
          style={{
            ...partContainerStyle,
            top: '100%',
            left: partOffset,
            transform: 'rotate(-90deg)',
          }}
        >
          <NumberPart
            {...numberPartProps}
            isActive={Boolean(NUMBER_VALUES[value][4])}
          />
        </div>
        <div
          style={{
            ...partContainerStyle,
            top: partOffset,
            right: 0,
          }}
        >
          <NumberPart
            {...numberPartProps}
            isActive={Boolean(NUMBER_VALUES[value][5])}
          />
        </div>
        <div
          style={{
            ...partContainerStyle,
            bottom: partOffset,
            right: 0,
          }}
        >
          <NumberPart
            {...numberPartProps}
            isActive={Boolean(NUMBER_VALUES[value][6])}
          />
        </div>
      </div>
    );
  }
);

export default Number;
