// Пользовательский хук useCounter с настраиваемой задержкой
// Принимает параметр delay, который определяет интервал обновления счетчика

import { useState, useEffect } from 'react';

export function useCounter(delay: number = 1000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
  return count;
}
