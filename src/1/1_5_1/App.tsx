import { getImageUrl } from "./util";

// Определяем типы для props компонента Profile
interface ProfileProps {
  name: string;
  imageId: string;
  profession: string;
  awards: string[];
  discovered: string;
}

// Новый компонент Profile, который принимает типизированные данные об ученом через props.
function Profile({ name, imageId, profession, awards, discovered }: ProfileProps) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageId="Maria"
        profession="physicist and chemist"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
        discovered="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageId="KatsukoSaruhashi"
        profession="geochemist"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
