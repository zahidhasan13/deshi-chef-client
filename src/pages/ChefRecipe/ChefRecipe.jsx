import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipes from "../../components/Recipes";

const ChefRecipe = () => {
    const {id} = useParams();
    const [chef, setChef] = useState([]);
    const recipes = useLoaderData();

    useEffect(() => {
        fetch(`https://deshi-chef-server-durdantozahid-gmailcom.vercel.app/chef/${id}`)
          .then((res) => res.json())
          .then((data) => setChef(data));
      }, [id]);
    return (
        <div>
            <div className="bg-gray-800">
            <div className="max-w-screen-xl mx-auto flex justify-center items-center py-8">
                <img src={chef.chefPicture} alt={chef.chefName} className="w-80 rounded"/>
                <div className="ml-4 text-white space-y-4">
                    <h2 className="text-3xl font-bold">{chef.chefName}</h2>
                    <p><strong>Experience: </strong>{chef.experience} Years</p>
                    <p><strong>Likes: </strong>{chef.likes}</p>
                </div>
            </div>
        </div>
        <div className="max-w-screen-xl mx-auto">
            <div className="lg:grid lg:grid-cols-3 lg:gap-4">
                {
                    recipes.map(recipe => <Recipes
                    key={recipe.recipeID}
                    recipe={recipe}
                    ></Recipes>)
                }
            </div>
        </div>
        </div>
    );
};

export default ChefRecipe;