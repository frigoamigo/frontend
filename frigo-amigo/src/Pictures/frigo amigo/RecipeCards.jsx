import pie from "../Pictures/Pie.png"
import soup from "../Pictures/Soup.png"

const RecipeCards = () => {
 return (
    <>
        <ul className="cards-list">
            <li>
                <div className="recipe-card" >
                    <img className="recipe-image" src={pie} alt="pie"></img>
                    <div className="recipe-heading">Ягодный пирог</div>
                    <div className="recipe-text">
                        Ingredients ...
                    </div>
                </div>
            </li>
            <li>
                <div className="recipe-card" id ="card2">
                    <img className="recipe-image" src={soup} alt="soup"></img>
                    <div className="recipe-heading">Сырный суп</div>
                </div>
            </li>
        </ul>
    </>
 )
}

export default RecipeCards;