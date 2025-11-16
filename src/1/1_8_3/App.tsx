export interface Story {
  id: string;
  label: string;
} 

const stories: Story[] = [];
export default function Wrapper(){
  return <StoryTray stories={stories}/>;
}

 function StoryTray({ stories }: { stories: Story[] }) {
   // Создаем новый массив, объединяя stories и 'фальшивую историю'
   const storiesWithCreate = stories.concat({
       id: 'create',
       label: 'Create Story',
   });

   return (
       <ul>
           {storiesWithCreate.map((story) => (
               <li key={story.id}>{story.label}</li>
           ))}
       </ul>
   );
}