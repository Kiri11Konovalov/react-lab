import { useState, useEffect } from 'react';

// Пользовательский хук useCounter
export function useCounter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    
    return () => clearInterval(id);
  }, []);
  
  return count;
}