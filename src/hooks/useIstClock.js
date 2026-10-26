import { useState, useEffect } from 'react';

export function useIstClock() {
  const [istTime, setIstTime] = useState('18:22:00');

  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        setIstTime(formatter.format(now));
      } catch {
        setIstTime('18:22:00');
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return istTime;
}
