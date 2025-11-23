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

export const getQueryParams = (): QueryParams => {
  const searchParams = new URLSearchParams(window.location.search);

  const parseBoolean = (key: string): boolean | undefined => {
    const parsedVal = searchParams.get(key);
    return parsedVal === 'true'
      ? true
      : parsedVal === 'false'
      ? false
      : undefined;
  };

  const parseNumber = (key: string): number | undefined => {
    const parsedVal = searchParams.get(key);
    if (parsedVal === null) {
      return undefined;
    }
    const num = parseInt(parsedVal);
    return isNaN(num) ? undefined : num;
  };

  const parseColor = (key: string): string | undefined => {
    const parsedVal = searchParams.get(key);
    return parsedVal?.length === 6 ? `#${parsedVal}` : undefined;
  };

  const parseTime = (): string | undefined => {
    const parsedVal = searchParams.get('time');
    if (parsedVal === null) {
      return undefined;
    }
    const regex = /^\d{2}:\d{2}$/;
    return regex.test(parsedVal) ? parsedVal : undefined;
  };

  return {
    height: parseNumber('height'),
    numberThickness: parseNumber('numberThickness'),
    numberInset: parseNumber('numberInset'),
    numberViewBoxHeight: parseNumber('numberViewBoxHeight'),
    activeColor: parseColor('activeColor'),
    inactiveColor: parseColor('inactiveColor'),
    backgroundColor: parseColor('backgroundColor'),
    hideGlow: parseBoolean('hideGlow'),
    hideLargeGlow: parseBoolean('hideLargeGlow'),
    time: parseTime(),
  };
};
