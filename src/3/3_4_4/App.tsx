// Изображение теперь очищается при нажатии на кнопку "Next", а затем загружается новое
import { useState } from 'react';
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [currentImageSrc, setCurrentImageSrc] = useState(images[0].src);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
      setCurrentImageSrc(''); // Очищаем изображение
      setTimeout(() => setCurrentImageSrc(images[index + 1].src), 0); // Устанавливаем новое изображение
    } else {
      setIndex(0);
      setCurrentImageSrc(''); // Очищаем изображение
      setTimeout(() => setCurrentImageSrc(images[0].src), 0); // Устанавливаем новое изображение
    }
  }

  let image = images[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      <img src={currentImageSrc} />
      <p>
        {image.place}
      </p>
    </>
  );
}

let images = [{
  place: 'Penang, Malaysia',
  src: 'FJeJR8M.jpg'
}, {
  place: 'Lisbon, Portugal',
  src: 'dB2LRbj.jpg'
}, {
  place: 'Bilbao, Spain',
  src: 'z08o2TS.jpg'
}, {
  place: 'Valparaíso, Chile',
  src: 'Y3utgTi.jpg'
}, {
  place: 'Schwyz, Switzerland',
  src: 'JBbMpWY.jpg'
}, {
  place: 'Prague, Czechia',
  src: 'QwUKKmF.jpg'
}, {
  place: 'Ljubljana, Slovenia',
  src: '3aIiwfm.jpg'
}];
