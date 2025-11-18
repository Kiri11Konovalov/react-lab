import { useState } from 'react';
import { foods, filterItems, Item } from './data';

export default function FilterableList() {
  const [query, setQuery] = useState('');

  function handleChange(e: any) {
    setQuery(e.target.value);
  }

  // Фильтруем список еды на основе запроса
  const filteredItems = filterItems(foods, query);

  return (
    <>
      <label>
        Search:{' '}
        <input
          value={query}
          onChange={handleChange}
        />
      </label>
      <hr />
      <List items={filteredItems} />
    </>
  );
}


function List({ items }: { items: Item[] }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
