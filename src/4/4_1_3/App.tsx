import { useRef } from 'react';

function DebouncedButton({ onClick, children }: {
  onClick: () => void, children: React.ReactNode
}) {
  // Используем useRef для хранения таймера, чтобы у каждой кнопки был свой таймер
  const timeoutID = useRef<number | undefined>(undefined);
  return (
    <button onClick={() => {
      // Очищаем предыдущий таймер, если он существует
      if (timeoutID.current) {
        clearTimeout(timeoutID.current);
      }
      // Устанавливаем новый таймер
      timeoutID.current = setTimeout(() => {
        onClick();
      }, 100);
    }}>
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton
        onClick={() => alert('Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )
}
