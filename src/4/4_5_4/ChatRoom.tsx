// Добавлен createConnection в зависимости useEffect для переподключения при изменении метода создания соединения

import { useEffect } from 'react';
import { Connection } from './chat';

export default function ChatRoom({ roomId, createConnection }: {
    roomId: string; createConnection: (roomId: string) => Connection;
}) {
    useEffect(() => {
        const connection = createConnection(roomId);
        connection.connect();
        return () => connection.disconnect();
    // Переподключаемся при изменении roomId или createConnection
    }, [roomId, createConnection]);

    return <h1>Welcome to the {roomId} room!</h1>;
}
