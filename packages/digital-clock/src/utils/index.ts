export const getFormattedTime = (time: Date) => {
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  return { hours, minutes };
};

export const getViewBoxDimensions = ({
  viewBoxHeight,
  viewBoxWidth,
  inset,
}: {
  viewBoxHeight: number;
  viewBoxWidth: number;
  inset: number;
}) => {
  return `-${inset} -${inset} ${viewBoxWidth + inset * 2} ${
    viewBoxHeight + inset * 2
  }`;
};

export const getNumberPartPoints = ({
  height,
  width,
}: {
  height: number;
  width: number;
}) => {
  return [
    `0,${width / 2}`,
    `0,${height - width / 2}`,
    `${width / 2},${height}`,
    `${width},${height - width / 2}`,
    `${width},${width / 2}`,
    `${width / 2},0`,
  ].join(' ');
};
