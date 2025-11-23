interface QueryParams {
  height?: number;
  numberThickness?: number;
  numberInset?: number;
  numberViewBoxHeight?: number;
  activeColor?: string;
  inactiveColor?: string;
  backgroundColor?: string;
  hideGlow?: boolean;
  hideLargeGlow?: boolean;
  time?: string;
}

export const getTestUrl = (params: QueryParams) => {
  return `?${Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')}`;
};
