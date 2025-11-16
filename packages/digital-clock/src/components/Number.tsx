import React from 'react';
import NumberPart from './NumberPart';
import { NUMBER_HEIGHT } from '../constants';
import { getNumberPartDimensions } from '../utils';

const { partWidth: PART_WIDTH, partHeight: PART_HEIGHT } =
  getNumberPartDimensions(NUMBER_HEIGHT);
const PART_OFFSET = PART_WIDTH / 2;
const NUMBER_WIDTH = PART_HEIGHT + PART_WIDTH;

const partContainerStyle = {
  position: 'absolute',
  height: PART_HEIGHT,
  width: PART_WIDTH,
  transformOrigin: 'top left',
} as const;

const Number = () => {
  return (
    <div
      style={{
        height: NUMBER_HEIGHT,
        width: NUMBER_WIDTH,
        position: 'relative',
      }}
    >
      <div
        style={{
          ...partContainerStyle,
          top: PART_OFFSET,
          left: 0,
        }}
      >
        <NumberPart height={PART_HEIGHT} width={PART_WIDTH} />
      </div>
      <div
        style={{
          ...partContainerStyle,
          bottom: PART_OFFSET,
          left: 0,
        }}
      >
        <NumberPart height={PART_HEIGHT} width={PART_WIDTH} />
      </div>
      <div
        style={{
          ...partContainerStyle,
          top: PART_OFFSET,
          right: 0,
        }}
      >
        <NumberPart height={PART_HEIGHT} width={PART_WIDTH} />
      </div>
      <div
        style={{
          ...partContainerStyle,
          bottom: PART_OFFSET,
          right: 0,
        }}
      >
        <NumberPart height={PART_HEIGHT} width={PART_WIDTH} />
      </div>
      <div
        style={{
          ...partContainerStyle,
          top: PART_WIDTH,
          left: PART_OFFSET,
          transform: 'rotate(-90deg)',
        }}
      >
        <NumberPart height={PART_HEIGHT} width={PART_WIDTH} />
      </div>
      <div
        style={{
          ...partContainerStyle,
          top: '50%',
          left: PART_OFFSET,
          transform: `rotate(-90deg) translateX(-${PART_OFFSET}px)`,
        }}
      >
        <NumberPart height={PART_HEIGHT} width={PART_WIDTH} />
      </div>
      <div
        style={{
          ...partContainerStyle,
          top: '100%',
          left: PART_OFFSET,
          transform: 'rotate(-90deg)',
        }}
      >
        <NumberPart height={PART_HEIGHT} width={PART_WIDTH} />
      </div>
    </div>
  );
};

export default Number;
