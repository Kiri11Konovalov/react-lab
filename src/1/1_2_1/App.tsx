import Gallery from "./Gallery.tsx";
import Profile from "./Profile.tsx";

export default function App() {
  return (
    <div>
      {/* Теперь оба компонента импортируются из своих файлов */}
      <Profile />
      <Gallery />
    </div>
  );
}
