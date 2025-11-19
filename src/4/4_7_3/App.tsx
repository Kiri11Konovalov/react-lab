// Проблема была в том, что объект options создавался заново при каждом рендере
// Это приводило к переподключению чата при изменении темы

import { useState, useMemo } from 'react';
import ChatRoom from './ChatRoom.tsx';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState('general');
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  // используем useMemo для сохранения ссылки на объект при неизменных значениях
  const options = useMemo(() => ({
    serverUrl,
    roomId
  }), [serverUrl, roomId]);

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <button onClick={() => setIsDark(!isDark)}>
        Toggle theme
      </button>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom options={options} />
    </div>
  );
}
