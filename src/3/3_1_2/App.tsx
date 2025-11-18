

import { useState } from 'react';
export default function EditProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacobs');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Переключаем состояние редактирования
        setIsEditing(!isEditing);
    };

    const handleFirstNameChange = (e: any) => {
        // Обновляем состояние firstName при изменении ввода
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: any) => {
        // Обновляем состояние lastName при изменении ввода
        setLastName(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First name:{' '}
                {/* Отображаем input в режиме редактирования и b в режиме просмотра */}
                {isEditing ? (
                    <input
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                ) : (
                    <b>{firstName}</b>
                )}
            </label>
            <label>
                Last name:{' '}
                {/* Отображаем input в режиме редактирования и b в режиме просмотра */}
                {isEditing ? (
                    <input
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                ) : (
                    <b>{lastName}</b>
                )}
            </label>
            <button type="submit">
                {/* Меняем текст кнопки в зависимости от режима */}
                {isEditing ? 'Save Profile' : 'Edit Profile'}
            </button>
            <p>
                {/* Обновляем приветственное сообщение в реальном времени */}
                <i>Hello, {firstName} {lastName}!</i>
            </p>
        </form>
    );
}