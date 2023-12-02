import RecipeCards from "./RecipeCards";
import Heading from "./Heading";
import React from 'react';


const Recipes = React.forwardRef((props, ref) => {
 return (
    <div className="container">
        <div ref={ref} style={{margin: "78em 0 0 0"}}>
         <Heading heading="Рецепты" lineWidth="7.7em" lineMargin="1.42em"/>
        </div>
        <RecipeCards />
    </div>
 )
});

export default Recipes;