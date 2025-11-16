const poem = {
  lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.',
  ],
};

export default function Poem() {
  return (
      <article>
          {poem.lines.flatMap((line, index) => [
              <p key={index}>{line}</p>,
              // Добавляем <hr />, если это не последний элемент
              index < poem.lines.length - 1 ? <hr key={`separator-${index}`} /> : null
          ])}
      </article>
  );
}