// Фокусировка поля ввода при монтировании компонента, если shouldFocus равно true
import { useEffect, useRef } from 'react';

export default function MyInput(
    { 
        shouldFocus, 
        value, 
        onChange 
    }: {
        shouldFocus: boolean,
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }) {
  // Создаем ref для доступа к элементу input
  const ref = useRef<HTMLInputElement>(null);

  // Фокусируем поле ввода только если shouldFocus равно true
  useEffect(() => {
    if (shouldFocus) {
      ref.current?.focus();
    }
    
  }, [shouldFocus]);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}
