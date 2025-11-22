import {
  getFormattedTime,
  getViewBoxDimensions,
  getNumberPartPoints,
} from './index';

describe('getFormattedTime', () => {
  it('should return the formatted time', () => {
    const time = new Date('2021-01-01T00:00:00');
    const formattedTime = getFormattedTime(time);
    expect(formattedTime).toEqual({ hours: '00', minutes: '00' });
  });

  it('should return the formatted time with leading zeros', () => {
    const time = new Date('2021-01-01T01:01:00');
    const formattedTime = getFormattedTime(time);
    expect(formattedTime).toEqual({ hours: '01', minutes: '01' });
  });

  it('should return the formatted time with no leading zeros', () => {
    const time = new Date('2021-01-01T12:34:00');
    const formattedTime = getFormattedTime(time);
    expect(formattedTime).toEqual({ hours: '12', minutes: '34' });
  });
});

describe('getViewBoxDimensions', () => {
  it('should return the view box dimensions', () => {
    const viewBoxDimensions = getViewBoxDimensions({
      viewBoxHeight: 100,
      viewBoxWidth: 200,
      inset: 10,
    });
    expect(viewBoxDimensions).toEqual('-10 -10 220 120');
  });

  it('should return the view box dimensions with no inset', () => {
    const viewBoxDimensions = getViewBoxDimensions({
      viewBoxHeight: 100,
      viewBoxWidth: 200,
      inset: 0,
    });
    expect(viewBoxDimensions).toEqual('0 0 200 100');
  });

  it('should return the view box dimensions with a negative inset', () => {
    const viewBoxDimensions = getViewBoxDimensions({
      viewBoxHeight: 100,
      viewBoxWidth: 200,
      inset: -10,
    });
    expect(viewBoxDimensions).toEqual('-10 -10 220 120');
  });
});

describe('getNumberPartPoints', () => {
  it('should return the number part points', () => {
    const numberPartPoints = getNumberPartPoints({
      height: 90,
      width: 20,
    });
    expect(numberPartPoints).toEqual('0,10 0,80 10,90 20,80 20,10 10,0');
  });
});
