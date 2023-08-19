/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Chef = ({chef}) => {
    const { chefID, chefName, experience, likes, chefPicture } = chef;
    return (
        <div className="border-2 border-green-400 rounded p-4">
            <img src={chefPicture} alt={chefName} className="w-full h-80 rounded"/>
            <div className="mt-4 space-y-2">
            <h2 className="text-2xl font-bold">{chefName}</h2>
            <p className="text-gray-500"><strong>Experience:</strong> {experience} Years</p>
            <p className="text-gray-500"><strong>Likes:</strong> {likes}</p>
            <Link to={`/recipe/${chefID}`}>
            <button className="text-white bg-green-700 hover:bg-green-500 font-medium rounded px-4 lg:px-5 py-2 lg:py-2.5 mr-2">View Recipes</button></Link>
            </div>
        </div>
    );
};

export default Chef;