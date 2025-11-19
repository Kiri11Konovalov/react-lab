// Добавлено очищение интервала при размонтировании компонента

import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }

    // Сохраняем идентификатор интервала для последующей очистки
    const intervalId = setInterval(onTick, 100);
    
    // Очищаем интервал при размонтировании компонента
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h1>{count}</h1>;
}
