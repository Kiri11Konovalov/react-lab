// Исправлено исчезновение текста ввода при нажатии на кнопку
import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);
  return (
    <div>
      {showHint && <p><i>Hint: Your favorite city?</i></p>}
      <Form />
      <button onClick={() => {
        setShowHint(!showHint);
      }}>
        {showHint ? 'Hide hint' : 'Show hint'}
      </button>
    </div>
  );
}

// Компонент Form теперь сохраняет свое состояние между рендерами,
// так как он всегда рендерится в одном и том же месте дерева компонентов
function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}

