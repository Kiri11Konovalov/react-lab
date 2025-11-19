// Добавлены ref'ы для изображений и useEffect для прокрутки к активному изображению
import { useState, useRef, useEffect } from 'react';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  // Создаем массив ref'ов для изображений
  const imgRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // Прокручиваем к активному изображению
    imgRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [index]);

  return (
    <>
      <nav>
        <button onClick={() => {
          if (index < catList.length - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                ref={(el) => {
                  if (el) imgRefs.current[i] = el;
                }}
                className={
                  index === i ?
                    'active' :
                    ''
                }
                
                // Привязываем ref к каждому изображению
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

type PlaceType = {
  id: number;
  imageUrl: string;
}

const catList: PlaceType[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `cat${i}.jpg`
  });
}

