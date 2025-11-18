import { useState, useEffect } from 'react';

export default function Clock(props: { time: string, color: string }) {
  const [color, setColor] = useState(props.color);

  // Обновляем состояние цвета при изменении пропса
  useEffect(() => {
    setColor(props.color);
  }, [props.color]);

  return (
    <h1 style={{ color: color }}>
      {props.time}
    </h1>
  );
}
