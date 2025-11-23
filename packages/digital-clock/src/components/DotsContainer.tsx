import React, { memo } from 'react';

import DotItem from './DotItem';

interface DotsContainerProps {
  color: string;
  baseSizeUnit: number;
  numberHeight: number;
  numberViewBoxHeight: number;
  numberThickness: number;
}

const DotsContainer = memo(
  ({
    color,
    baseSizeUnit,
    numberHeight,
    numberViewBoxHeight,
    numberThickness,
  }: DotsContainerProps) => {
    const dotViewBoxHeight = numberThickness;
    const dotSize = dotViewBoxHeight * (numberHeight / numberViewBoxHeight);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: baseSizeUnit * 3,
          padding: baseSizeUnit,
        }}
      >
        <DotItem
          color={color}
          size={dotSize}
          viewBoxHeight={dotViewBoxHeight}
        />
        <DotItem
          color={color}
          size={dotSize}
          viewBoxHeight={dotViewBoxHeight}
        />
      </div>
    );
  }
);

export default DotsContainer;
