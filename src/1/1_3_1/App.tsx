export default function Bio() {
    return (
      // JSX-выражения должны иметь один родительский элемент.
      <div>
        {/* Атрибут "class" в HTML становится "className" в JSX. */}
        <div className="intro">
          <h1>Welcome to my website!</h1>
        </div>
        <p className="summary">
          You can find my thoughts here.
          {/* В JSX теги вроде <br> должны быть самозакрывающимися. */}
          <br /><br />
          <b>And <i>pictures</i></b> of scientists!
        </p>
      </div>
    );
  }