import RecipeCards from "./RecipeCards";
import Heading from "./Heading";


const Recipes = () => {
 return (
    <>
        <div style={{margin: "78em 0 0 0"}}>
         <Heading heading="Рецепты" lineWidth="7.7em" lineMargin="1.42em"/>
        </div>
        <RecipeCards />
    </>
 )
}

export default Recipes;