import React from 'react';

const STROKE_OFFSET_RATIO = 0.1;

interface NumberPartProps {
  height: number;
  width: number;
  isActive?: boolean;
}

const NumberPart = ({ height, width, isActive = false }: NumberPartProps) => {
  const points = [
    `0,${width / 2}`,
    `0,${height - width / 2}`,
    `${width / 2},${height}`,
    `${width},${height - width / 2}`,
    `${width},${width / 2}`,
    `${width / 2},0`,
  ].join(' ');
  const strokeOffset = width * STROKE_OFFSET_RATIO;

  return (
    <svg
      height={height}
      width={width}
      viewBox={`${-strokeOffset} ${-strokeOffset} ${width + strokeOffset * 2} ${
        height + strokeOffset * 2
      }`}
    >
      <polygon fill={isActive ? 'hotpink' : '#333'} points={points} />
    </svg>
  );
};

export default NumberPart;
