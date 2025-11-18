import { useState } from 'react';
import { initialLetters, LetterType } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
    const [letters, setLetters] = useState(initialLetters);
    const [highlightedId, setHighlightedId] = useState<number | null>(null);

    function handleHover(letter: LetterType) {
        setHighlightedId(letter.id);
    }

    function handleStar(starred: LetterType) {
        setLetters(letters.map(letter => {
            if (letter.id === starred.id) {
                return {
                    ...letter,
                    isStarred: !letter.isStarred
                };
            } else {
                return letter;
            }
        }));
    }

    function isHighlighted(id: number) {
        return id === highlightedId;
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        // Передаем id вместо всего объекта, чтобы избежать проблем с перерендером
                        isHighlighted={isHighlighted(letter.id)}
                        onHover={handleHover}
                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </>
    );
}

