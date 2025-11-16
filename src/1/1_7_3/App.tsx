import { recipes } from './data';

// Извлекаем компонент Recipe
function Recipe({ name, ingredients }: { name: string, ingredients: string[] }) {
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(
                    (ingredient) => (
                        <li key={ingredient}>
                            {ingredient}
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map((recipe) => (
                // Ключ key находится здесь, потому что RecipeList отображает список Recipe
                <Recipe
                    key={recipe.id}
                    name={recipe.name}
                    ingredients={recipe.ingredients}
                />
            ))}
        </div>
    );
}