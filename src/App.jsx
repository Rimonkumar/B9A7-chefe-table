import { useEffect, useState } from 'react';
import './App.css'
import Banner from './Components/Main/Banner'
import NavBar from './Components/Main/NavBar'
import Recipes from './Components/Main/Recipes'
import WantToCookSidebar from './Components/Sidebar/WantToCookSidebar';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  useEffect(() => {
    fetch('Data.json')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  const handleWantToCook = (recipe) => {
    const exists = wantToCook.find(item => item.recipe_id === recipe.recipe_id);
    if (exists) {
      if (window.toast) {
        window.toast('This recipe is already in your Want to Cook list!');
      } else {
        alert('This recipe is already add Cook list!');
      }
      return;
    }
    setWantToCook([...wantToCook, recipe]);
  };

  const handlePrepare = (recipe) => {
    setWantToCook(wantToCook.filter(item => item.recipe_id !== recipe.recipe_id));
    setCurrentlyCooking([...currentlyCooking, recipe]);
  };

  return (
    <>
      <div className='w-full max-w-7xl mx-auto px-4 lg:px-12'>
        <NavBar />
        <Banner />
        <Recipes
          recipes={recipes}
          onWantToCook={handleWantToCook}
          gridCols="grid-cols-1 md:grid-cols-2"
          wantToCook={wantToCook}
          onPrepare={handlePrepare}
          currentlyCooking={currentlyCooking}
        />

      </div>

    </>
  );
}

export default App
