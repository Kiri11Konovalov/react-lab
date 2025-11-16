import { recipes } from './data';

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {/* Внешний map для перебора рецептов */}
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    {/* Внутренний map для перебора ингредиентов в каждом рецепте */}
                    <ul>
                        {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
