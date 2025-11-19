// Добавлен ref к полю ввода и обработчик onClick к кнопке для установки фокуса
import { useRef } from 'react';

export default function Page() {
  // Создаем ref для доступа к элементу input
  const inputRef = useRef<HTMLInputElement>(null);
  
  function handleClick() {
    // Устанавливаем фокус на поле ввода
    inputRef.current?.focus();
  }

  return (
    <>
      <nav>
        <button onClick={handleClick}>Search</button>
      </nav>
      <input
        // Привязываем ref к элементу input
        ref={inputRef}
        placeholder="Looking for something?"
      />
    </>
  );
}
