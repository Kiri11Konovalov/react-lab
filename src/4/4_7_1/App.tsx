// Исправлено сбрасывание интервала

import { useState, useEffect } from 'react';

export default function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('✅ Creating an interval');
        const id = setInterval(() => {
            console.log('⏰ Interval tick');
            setCount(c => c + 1); // Используем функциональное обновление для избежания захвата устаревшего значения count
        }, 1000);
        return () => {
            console.log('❌ Clearing an interval');
            clearInterval(id);
        };
    }, []); // Убираем count из списка зависимостей, чтобы эффект не перезапускался

    return <h1>Counter: {count}</h1>;
}