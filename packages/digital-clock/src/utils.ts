export const getNumberPartDimensions = ({
  numberHeight,
  numberThickness,
  viewBoxHeight,
}: {
  numberHeight: number;
  numberThickness: number;
  // Only needed if viewBoxHeight is not the same as numberHeight
  viewBoxHeight?: number;
}) => {
  const numberThicknessRatio =
    numberThickness / (viewBoxHeight ?? numberHeight);
  const partWidth = numberHeight * numberThicknessRatio;
  const partHeight = (numberHeight - partWidth) / 2;

  return { partWidth, partHeight };
};
