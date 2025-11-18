import { Que } from "./App";

export function getFinalState(baseState: number, queue: Que[]) {
    let finalState = baseState;

    // Обрабатываем каждый элемент очереди
    for (const update of queue) {
        if (typeof update === 'function') {
            // Если элемент очереди - функция, применяем её к текущему состоянию
            finalState = update(finalState);
        } else {
            // Если элемент очереди - число, устанавливаем его как новое состояние
            finalState = update;
        }
    }

    return finalState;
}