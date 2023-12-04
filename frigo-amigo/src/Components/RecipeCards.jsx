import pie from "../Pictures/Pie.png"
import soup from "../Pictures/Soup.png"
import line from "../Pictures/Line 5.png"
import arrows from "../Pictures/Group 34.png"

const RecipeCards = (props) => {

 const {recipes} = props;

 if (!recipes || recipes.length === 0) return <p>No recipes found</p>

 return (
    <>
        <ul className="cards-list">
          {recipes.slice(0, 2).map((recipe) => {

                let key = `${recipe.id}`;

                return (
                    <li>
                        <div className="recipe-card" key={key}>
                            <img className="recipe-image" src={pie} alt="pie"></img>
                            <img className="recipe-arrow" src={arrows} alt="arrows"></img>
                            <div className="recipe-heading nextart-700">{recipe.firstName}</div>
                            <img className="recipe-line" src={line} alt="line"></img>
                            <div className="recipe-ingredients roundmplus-600">
                                {recipe.lastName}:
                            </div>
                            <div className="recipe-ingredients-items roundmplus-600">
                                <ul style={{listStyleType: "disc"}}>
                                    <li>{recipe.phone}</li>
                                    <li>{recipe.email}</li>
                                    <li>{recipe.phone}</li>
                                    <li>{recipe.email}</li>
                                </ul>
                            </div>
                            <div className="recipe-pfc-per-100 roundmplus-600">{key}</div>
                            <div className="recipe-pfc-calories roundmplus-600">{recipe.phone} | {recipe.phone}</div>
                        </div>
                    </li>
                )
            }
            )}
            {/* <li>
                <div className="recipe-card" >
                    <img className="recipe-image" src={soup} alt="soup"></img>
                    <img className="recipe-arrow" src={arrows} alt="arrows"></img>
                    <div className="recipe-heading nextart-700">Сырный суп для Милены</div>
                    <img className="recipe-line" src={line} alt="line"></img>
                    <div className="recipe-ingredients roundmplus-600">
                        Ингредиенты:
                    </div>
                    <div className="recipe-ingredients-items roundmplus-600">
                        <ul style={{listStyleType: "disc"}}>
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
            
                {
    "id": "1",
    "firstName": "Milena", 
    "lastName": "Letz",
    "phone": "0982345681",
    "email": "letz@dot.com",
  },
  
  {
    "id": "2",
    "firstName": "Lisa", 
    "lastName": "Ekshina",
    "phone": "0982306723",
    "email": "ekshina@dot.com",
  },
  
  {
    "id": "3",
    "firstName": "Vanja", 
    "lastName": "Kusminykh",
    "phone": "0982398256",
    "email": "kusminykh@dot.com",
  },
  
  {
    "id": "4",
    "firstName": "Zahar", 
    "lastName": "Rudenko",
    "phone": "0982367823",
    "email": "rudenko@dot.com",
  },
  
  {
    "id": "5",
    "firstName": "Olja", 
    "lastName": "Efimova",
    "phone": "0982309357",
    "email": "efimova@dot.com",
  }*/}
        </ul>
        <div className="recipe-button">
            <button className="recipe-button-design manrope-400">Смотреть больше рецептов</button>
        </div>
    </>
 )
}

export default RecipeCards;