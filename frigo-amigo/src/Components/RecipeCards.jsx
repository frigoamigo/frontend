import pie from "../Pictures/Pie.png"
import soup from "../Pictures/Soup.png"
import line from "../Pictures/Line 5.png"
import arrows from "../Pictures/Group 34.png"

const RecipeCards = () => {
 return (
    <>
        <ul className="cards-list">
            <li>
                <div className="recipe-card" >
                    <img className="recipe-image" src={pie} alt="pie"></img>
                    <img className="recipe-arrow" src={arrows} alt="arrows"></img>
                    <div className="recipe-heading nextart-700">Ягодный пирог</div>
                    <img className="recipe-line" src={line} alt="line"></img>
                    <div className="recipe-ingredients roundmplus-600">
                        Ингредиенты:
                    </div>
                    <div className="recipe-ingredients-items roundmplus-600">
                        <ul>
                            <li>Кокейн по вкусу</li>
                            <li>Тесто вот это да!</li>
                            <li>Дети куриные</li>
                            <li>Протеин чтобы пп</li>
                        </ul>
                    </div>
                    <div className="pfc-per-100 roundmplus-600">БЖУ на 100г</div>
                    <div className="pfc-calories roundmplus-600">Б 0г |  Ж 0г  |  У 0г  |  0кк</div>
                </div>
            </li>
            <li>
                <div className="recipe-card" >
                    <img className="recipe-image" src={soup} alt="soup"></img>
                    <img className="recipe-arrow" src={arrows} alt="arrows"></img>
                    <div className="recipe-heading nextart-700">Сырный суп для Милены</div>
                    <img className="recipe-line" src={line} alt="line"></img>
                    <div className="recipe-ingredients roundmplus-600">
                        Ингредиенты:
                    </div>
                    <div className="recipe-ingredients-items roundmplus-600">
                        <ul>
                            <li>Кокейн по вкусу</li>
                            <li>Тесто вот это да!</li>
                            <li>Дети куриные</li>
                            <li>Протеин чтобы пп</li>
                        </ul>
                    </div>
                    <div className="recipe-pfc-per-100 roundmplus-600">БЖУ на 100г</div>
                    <div className="recipe-pfc-calories roundmplus-600">Б 0г |  Ж 0г  |  У 0г  |  0кк</div>
                </div>
            </li>
        </ul>
        <div className="recipe-button">
            <button className="recipe-button-design manrope-400">Смотреть больше рецептов</button>
        </div>
    </>
 )
}

export default RecipeCards;