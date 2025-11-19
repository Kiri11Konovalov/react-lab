import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  // Используем ref для хранения актуального значения текста
  const textRef = useRef(text);

  function handleSend() {
    setTimeout(() => {
      // Используем актуальное значение из ref
      alert('Sending: ' + textRef.current);
    }, 300);
  }
  return (
    <>
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
          // Обновляем значение в ref при изменении текста
          textRef.current = e.target.value;
        }}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
