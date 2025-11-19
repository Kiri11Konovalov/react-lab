// Заменен useRef на useState для управления состоянием переключателя
import { useState } from 'react';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => {
      setIsOn(!isOn);
    }}>
      {isOn ? 'Вкл' : 'Выкл'}
    </button>
  );
}