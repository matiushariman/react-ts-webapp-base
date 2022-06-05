import { useState, useEffect, useLayoutEffect, useRef } from 'react';

const getOnlineStatus = (): boolean =>
  typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true;

export const NavigatorOnline = (): null => {
  const onMount = useRef(true);
  const [status, setStatus] = useState(getOnlineStatus());

  const setOnline = () => setStatus(true);
  const setOffline = () => setStatus(false);

  useEffect(() => {
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);

  useLayoutEffect(() => {
    if (onMount.current) {
      onMount.current = false;

      return;
    }
    // example
    // eslint-disable-next-line no-console
    console.warn('online status: ', status);
  }, [status]);

  return null;
};
