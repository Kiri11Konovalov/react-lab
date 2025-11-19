// Добавлена проверка ignore для предотвращения установки устаревших данных
import { useState, useEffect } from 'react';
import { fetchBio } from './api.ts';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState<string | null> (null);

  useEffect(() => {
    // Используем переменную ignore для предотвращения установки устаревших данных
    let ignore = false;
    setBio(null);
    fetchBio(person).then(result => {
      // Проверяем, не был ли компонент размонтирован или person не изменился
      if (!ignore) {
        setBio(result);
      }
    });
    // Устанавливаем ignore в true при размонтировании или изменении person
    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </>
  );
}
