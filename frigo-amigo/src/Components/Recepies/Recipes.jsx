import RecipeCards from './RecipeCards';
import Heading from '../Heading';
import React from 'react';
import LoadingRecipeCards from './LoadingRecipeCards';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Recipes = React.forwardRef((props, ref) => {
  const RecipesLoading = LoadingRecipeCards(RecipeCards);

  const [recipeState, setRecipeState] = useState({
    loading: false,
    recipes: null,
  });

  useEffect(() => {
    setRecipeState({ loading: true });
    const recipeUrl =
      'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    axios.get(recipeUrl).then((response) => {
      setRecipeState({
        loading: false,
        recipes: response.data,
      });
    });
  }, [setRecipeState]);

  return (
    <div className="container">
      <div ref={ref} style={{ margin: '132em 0 0 0' }}>
        <div className="recipe-heading-web-desktop">
          <Heading heading="Рецепты" lineWidth="7.7em" lineMargin="1.42em" />
        </div>
        <div className="recipe-heading-web-mobile">
          <Heading heading="Рецепты" lineWidth="2em" lineMargin="1.1em" />
        </div>
      </div>
      <RecipesLoading isLoading={recipeState.loading} recipes={recipeState.recipes} />
    </div>
  );
});

export default Recipes;
