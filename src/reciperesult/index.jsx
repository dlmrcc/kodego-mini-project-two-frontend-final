import React, { useState, useEffect } from 'react';
import { RecipeAPI } from '../utils/fetch/recipeFetch';
import ViewRecipe from './ViewRecipe'

function RecipeComponent() {

    const [results, setResults] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [theSearchVale, setTheSearhcValue]=useState();

    useEffect(() => {
        let url = new URL(window.location.href);
       let searchValue = url.searchParams.get("search");
       setTheSearhcValue(searchValue);
       console.log(searchValue)
        if (searchValue !== '')
         {
            RecipeAPI(searchValue)
            .then(response => response.json())
                .then(data => {
                 
                    setResults(data.hits);
                })
                .catch(error => console.error(error));

        }
    }, []);

    const handleRecipeClick = (recipe) => {
        setSelectedRecipe(recipe);
    }

 

    return (
        <div className="bg-light  py-5">
            {selectedRecipe && <ViewRecipe recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
            
            <h4 className="mt-1" style={{ textAlign: 'center' }} >{results.length} result(s) for {theSearchVale}</h4>
            <div className="row row-cols-1 row-cols-md-4 g-4 font-style mt-1 ms-4 me-4">
                {results.map((result, index) => (
                    <div className="col main-card" key={index} onClick={() => handleRecipeClick(result.recipe)}>
                        <div className="card h-100 bg-dark">
                            <img src={result.recipe.image} className="card-img-top" alt={result.recipe.label} />
                            <div className="card-body">
                                <h5 className="card-title text-white m-1">{result.recipe.label}</h5>
                                 <p className="card-text text-white m-0">{result.recipe.ingredients.length} Ingredients</p>
                                 <p className="card-text text-white m-0">Cuisine type: {result.recipe.cuisineType}</p>
                                 <p className="card-text text-white  m-0">Dish type: {result.recipe.dishType}</p>
                            </div>
                            <div className="card-footer-sm bg-warning justify-content-center align-items-center">
                                <p className="card-text text-dark justify-content-center" style={{ textAlign: 'center' }} >Meal type: {result.recipe.mealType}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeComponent;
