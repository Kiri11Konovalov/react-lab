// Использован useRef для хранения идентификатора таймаута, чтобы он сохранялся между рендерами
import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  // Используем useRef для хранения идентификатора таймаута между рендерами
  const timeoutID = useRef<number | null>(null);

  function handleSend() {
    setIsSending(true);
    // Сохраняем идентификатор таймаута в ref
    timeoutID.current = setTimeout(() => {
      alert('Отправлено!');
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    // Проверяем и отменяем таймаут, если он существует
    if (timeoutID.current) {
      clearTimeout(timeoutID.current);
    }
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Отправляем...' : 'Отправить'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
          Отменить
        </button>
      }
    </>
  );
}
