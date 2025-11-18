import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  function handleChange(e: any) {
    setText(e.target.value);
  }

  return (
    <>
      {/* Оба инпута используют одно и то же состояние и функцию handleChange, что обеспечивает их синхронизацию */}
      <Input label="First input" text={text} onChange={handleChange} />
      <Input label="Second input" text={text} onChange={handleChange} />
    </>
  );
}

function Input({ label, text, onChange }: { label: string, text: string, onChange: (e: any) => void }) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={onChange}
      />
    </label>
  );
}

