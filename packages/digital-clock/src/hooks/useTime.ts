import { useEffect, useState } from 'react';

const UPDATE_INTERVAL = 1000;
const defaultTimeUpdate = () => new Date();

export const useTime = (getTimeUpdate: () => Date = defaultTimeUpdate) => {
  const [time, setTime] = useState(getTimeUpdate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeUpdate());
    }, UPDATE_INTERVAL);
    return () => clearInterval(interval);
  }, [getTimeUpdate]);

  return time;
};
