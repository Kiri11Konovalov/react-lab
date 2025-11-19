// Фокусировка поля ввода при монтировании компонента
import { useEffect, useRef } from 'react';

export default function MyInput(
    {
        value,
        onChange
    }: {
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }) {

    // Создаем ref для доступа к элементу input
    const ref = useRef<HTMLInputElement>(null);

    // Фокусируем поле ввода при монтировании компонента
    useEffect(() => {
        ref.current?.focus();
    }, []);

    return (
        <input
            ref={ref}
            value={value}
            onChange={onChange}
        />
    );
}