import React from 'react';
import Recipe from '../RecipeCard/Recipe';

import WantToCookSidebar from '../Sidebar/WantToCookSidebar';

const Recipes = ({ recipes, onWantToCook, gridCols, wantToCook, onPrepare, currentlyCooking }) => {
    return (
        <div className="mb-10">
            <div className="text-center mb-14 flex flex-col items-center">
                <h1 className="font-bold text-4xl">Our Recipes</h1>
                <p className="max-w-3xl p-4 mt-2 font-semibold text-gray-600">
                    Hello, it’s wonderful to have you here. We cherish the joy of coming together around
                    delicious meals made with love, laughter, and great company. Our passion is to share not just recipes.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className={`w-full lg:w-2/3 grid ${gridCols ? gridCols : 'grid-cols-1 md:grid-cols-2'} gap-8`}>
                    {recipes && recipes.map(recipe => (
                        <Recipe key={recipe.recipe_id} recipe={recipe} onWantToCook={onWantToCook} />
                    ))}
                </div>
                <div className="w-full lg:w-1/3">
                    <WantToCookSidebar wantToCook={wantToCook} onPrepare={onPrepare} currentlyCooking={currentlyCooking} />
                </div>
            </div>
        </div>
    );
};

export default Recipes;