// WantToCookSidebar.jsx
import React from 'react';

const WantToCookSidebar = ({ wantToCook, onPrepare, currentlyCooking }) => {
  const totalTime = currentlyCooking.reduce((sum, item) => sum + parseInt(item.preparing_time || 0), 0);
  const totalCalories = currentlyCooking.reduce((sum, item) => sum + parseInt(item.calories || 0), 0);

  return (
    <div className="w-full max-w-xl bg-white rounded-2xl border shadow-lg p-5">
      <h2 className="text-xl font-bold text-center mb-3">
        Want to cook: <span>{wantToCook.length.toString().padStart(2, '0')}</span>
      </h2>

      <div className="border-t pt-2">
        <div className="font-semibold text-gray-700 text-base border-b pb-1 mb-2 flex justify-between">
          <span className="w-1/3 text-left">Name</span>
          <span className="w-1/3 text-center">Time</span>
          <span className="w-1/3 text-center">Calories</span>
        </div>
        {wantToCook.length === 0 ? (
          <p className="text-center text-gray-400 py-6">No recipes selected</p>
        ) : (
          wantToCook.map((item, index) => (
            <div
              key={item.recipe_id}
              className="text-sm text-gray-800 border-b last:border-0 py-2 flex items-center justify-between"
            >
              <span className="w-1/3 text-left truncate">{index + 1} {item.recipe_name}</span>
              <span className="w-1/3 text-center">{item.preparing_time} minutes</span>
              <span className="w-1/3 text-center">{item.calories} calories</span>
              <button
                onClick={() => onPrepare(item)}
                className="ml-2 bg-green-500 text-white px-3 py-1 text-sm rounded-full hover:bg-green-600"
              >
                Preparing
              </button>
            </div>
          ))
        )}
      </div>

      <h2 className="text-xl font-bold text-center mt-6 mb-3">
        Currently cooking: <span>{currentlyCooking.length.toString().padStart(2, '0')}</span>
      </h2>

      <div className="border-t pt-2">
        <div className="font-semibold text-gray-700 text-base border-b pb-1 mb-2 flex justify-between">
          <span className="w-1/3 text-left">Name</span>
          <span className="w-1/3 text-center">Time</span>
          <span className="w-1/3 text-center">Calories</span>
        </div>
        {currentlyCooking.length === 0 ? (
          <p className="text-center text-gray-400 py-6">No recipes cooking</p>
        ) : (
          currentlyCooking.map((item, index) => (
            <div
              key={item.recipe_id}
              className="text-sm text-gray-800 border-b last:border-0 py-2 flex justify-between"
            >
              <span className="w-1/3 text-left truncate">{index + 1} {item.recipe_name}</span>
              <span className="w-1/3 text-center">{item.preparing_time} minutes</span>
              <span className="w-1/3 text-center">{item.calories} calories</span>
            </div>
          ))
        )}
      </div>

      {currentlyCooking.length > 0 && (
        <div className="mt-5 border-t pt-3 text-sm font-medium text-gray-800 flex justify-between">
          <p>Total Time = <span className="font-bold">{totalTime} minutes</span></p>
          <p>Total Calories = <span className="font-bold">{totalCalories} calories</span></p>
        </div>
      )}
    </div>
  );
};

export default WantToCookSidebar;