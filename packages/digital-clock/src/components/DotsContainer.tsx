import React, { memo } from 'react';

import DotItem from './DotItem';

interface DotsContainerProps {
  color: string;
  inset: number;
  baseSizeUnit: number;
  numberHeight: number;
  numberViewBoxHeight: number;
}

const DotsContainer = memo(
  ({
    baseSizeUnit,
    numberHeight,
    numberViewBoxHeight,
    ...props
  }: DotsContainerProps) => {
    const dotSize = baseSizeUnit * 2;
    const dotViewBoxHeight = dotSize * (numberViewBoxHeight / numberHeight);

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
        <DotItem {...props} size={dotSize} viewBoxHeight={dotViewBoxHeight} />
        <DotItem {...props} size={dotSize} viewBoxHeight={dotViewBoxHeight} />
      </div>
    );
  }
);

export default DotsContainer;
