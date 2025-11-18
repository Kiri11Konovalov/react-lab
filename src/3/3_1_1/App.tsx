import { useState } from 'react';

export default function Picture() {
    const [isActive, setIsActive] = useState(false);

    const divClassName = `background ${isActive ? '' : 'background--active'}`;
    const imgClassName = `picture ${isActive ? 'picture--active' : ''}`;

    return (
        <div className={divClassName}>
            {/* При клике на изображение изменяется состояние isActive, что приводит к изменению CSS-классов */}
            <img
                className={imgClassName}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="/5qwVYb1.jpg"
                onClick={() => setIsActive(!isActive)}
            />
        </div>
    );
}