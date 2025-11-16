function Drink({ name }: { name: string }) {
  // Объявляем переменные для хранения информации о напитке
  let partOfPlant;
  let caffeineContent;
  let age;

 // Используем один блок if для определения значений переменных
 // в зависимости от названия напитка
  if (name === 'tea') {
    partOfPlant = 'leaf';
    caffeineContent = '15–70 mg/cup';
    age = '4,000+ years';
  } else if (name === 'coffee') {
    partOfPlant = 'bean';
    caffeineContent = '80–185 mg/cup';
    age = '1,000+ years';
  } else {
    // Обработка случая, если name не 'tea' и не 'coffee'
    partOfPlant = 'unknown';
    caffeineContent = 'unknown';
    age = 'unknown';
  }

 return (
      <section>
          <h1>{name}</h1>
          <dl>
              <dt>Part of plant</dt>
              <dd>{partOfPlant}</dd>
              <dt>Caffeine content</dt>
              <dd>{caffeineContent}</dd>
              <dt>Age</dt>
              <dd>{age}</dd>
          </dl>
      </section>
  );
}

export default function DrinkList() {
  return (
      <div>
          <Drink name="tea" />
          <Drink name="coffee" />
      </div>
  );
}
