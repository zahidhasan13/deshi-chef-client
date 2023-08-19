/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Recipes = ({recipe}) => {
    const {recipeID, recipeName, rating, recipeImg} = recipe;
    return (
        <div className="my-4 p-4 border-2 border-green-500 rounded space-y-4">
            <img src={recipeImg} alt={recipeName} className="w-full h-52 rounded"/>
            <h1 className="text-4xl">{recipeName}</h1>
            <p className="text-gray-600">Rating: {rating}</p>
            <Link to={`/recipeDetails/${recipeID}`}>
                <button className="text-white bg-green-700 hover:bg-green-500 focus:ring-4 focus:ring-primary-300 font-medium rounded text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-primary-800 mt-4">Show Cooking Method</button>
            </Link>
        </div>
    );
};

export default Recipes;