import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const selectedCount = selectedIds.size;

  function handleToggle(toggledId: number) {
    // Создаем новое множество на основе текущего
    const newSelectedIds = new Set(selectedIds);
    // Добавляем или удаляем ID из множества в зависимости от его наличия
    if (newSelectedIds.has(toggledId)) {
      newSelectedIds.delete(toggledId);
    } else {
      newSelectedIds.add(toggledId);
    }
    // Обновляем состояние множества выбранных ID
    setSelectedIds(newSelectedIds);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            // Проверяем, есть ли ID письма в множестве выбранных
            isSelected={selectedIds.has(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}

