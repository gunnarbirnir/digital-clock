import React from 'react';
import { NUMBER_PART_OFFSET_RATIO } from '../constants';
import { getNumberPartDimensions } from '../utils';

const VIEW_BOX_HEIGHT = 400;
const { partWidth: PART_WIDTH, partHeight: PART_HEIGHT } =
  getNumberPartDimensions(VIEW_BOX_HEIGHT);
const STROKE_OFFSET = PART_WIDTH * NUMBER_PART_OFFSET_RATIO;

const POINTS = [
  `0,${PART_WIDTH / 2}`,
  `0,${PART_HEIGHT - PART_WIDTH / 2}`,
  `${PART_WIDTH / 2},${PART_HEIGHT}`,
  `${PART_WIDTH},${PART_HEIGHT - PART_WIDTH / 2}`,
  `${PART_WIDTH},${PART_WIDTH / 2}`,
  `${PART_WIDTH / 2},0`,
].join(' ');

const VIEW_BOX = `-${STROKE_OFFSET} -${STROKE_OFFSET} ${
  PART_WIDTH + STROKE_OFFSET * 2
} ${PART_HEIGHT + STROKE_OFFSET * 2}`;

interface NumberPartProps {
  height: number;
  width: number;
  isActive?: boolean;
}

const NumberPart = ({ height, width, isActive = false }: NumberPartProps) => {
  return (
    <svg height={height} width={width} viewBox={VIEW_BOX}>
      <polygon fill={isActive ? 'hotpink' : '#333'} points={POINTS} />
    </svg>
  );
};

export default NumberPart;
