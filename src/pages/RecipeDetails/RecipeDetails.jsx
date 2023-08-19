import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
    const recipeDetails = useLoaderData();
    const {recipeName, rating, recipeImg, ingredients, cookingMethod} = recipeDetails;
    console.log(recipeDetails);
    return (
        <div className="max-w-screen-xl mx-auto my-4 lg:grid lg:grid-cols-2 lg:gap-4">
            <img src={recipeImg} alt={recipeName} className="w-full"/>
            <div>
            <h1 className="text-3xl font-bold">Recipe Name: {recipeName}</h1>
            <p className="text-gray-500">Ratings: {rating}</p>
            <p><strong>Cooking Ingredients:</strong></p>
            <ul className="list-disc pl-4">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h4 className="text-xl font-bold">Cooking Method:</h4>
            <p>{cookingMethod}</p>
            </div>
        </div>
    );
};

export default RecipeDetails;