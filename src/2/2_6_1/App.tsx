import { useState } from 'react';

export default function Scoreboard() {
    const [player, setPlayer] = useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
    });

    function handlePlusClick() {
        // Используем spread-оператор для создания нового объекта и увеличиваем score
        setPlayer({
            ...player,
            score: player.score + 1,
        });
    }

    function handleFirstNameChange(e: any) {
        // Используем spread-оператор для создания нового объекта и обновляем firstName
        setPlayer({
            ...player,
            firstName: e.target.value,
        });
    }

    function handleLastNameChange(e: any) {
        // Используем spread-оператор для создания нового объекта и обновляем lastName
        setPlayer({
            ...player,
            lastName: e.target.value,
        });
    }

    return (
        <>
            <label>
                Score: <b>{player.score}</b>{' '}
                <button onClick={handlePlusClick}>
                    +1
                </button>
            </label>
            <label>
                First name:
                <input
                    value={player.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={player.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
        </>
    );
}