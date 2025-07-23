import React from 'react';

const Recipe = ({ recipe, onWantToCook }) => {
  return (
    <div className=" bg-white max-w-sm rounded-xl border p-4 shadow hover:shadow-lg transition">
      <img
        src={recipe.recipe_image}
        alt={recipe.recipe_name}
        className="w-full max-w-xl h-48 object-cover rounded-lg mb-3"
      />

      <h2 className="text-xl font-bold  mb-1">
        {recipe.recipe_name}
      </h2>

      <p className="text-gray-600  text-sm mb-4">
        {recipe.short_description}
      </p>

      <hr className="my-2" />

      <p className="font-semibold mb-1">
        Ingredients: {recipe.ingredients.length}
      </p>

      <ul className="list-disc text-sm text-gray-700 pl-5 mb-4">
        {recipe.ingredients.slice(0, 3).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
        {recipe.ingredients.length > 3 && (
          <li className="text-gray-400">...and more</li>
        )}
      </ul>

      <hr className="my-2" />

      <div className="flex justify-between text-sm text-gray-700 mb-3">
        <p>⏱ {recipe.preparing_time}</p>
        <p>🔥 {recipe.calories}</p>
      </div>

      <button
        onClick={() => onWantToCook(recipe)}
        className="bg-green-600 text-center text-white w-48  py-2 rounded-full hover:bg-green-700"
      >
        Want to Cook
      </button>
    </div>
  );
};

export default Recipe;
