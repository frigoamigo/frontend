import PremiumSingleCard from "./PremiumSingleCard";
import stars from"../Pictures/PREMIUM.png"


const PremiumCards = () => {
    return(
        <>
        <img src={stars} alt="stars_premium" className="premium-stars"></img>
        <div className="premium-cards-block">
            <PremiumSingleCard time="1 Месяц" colorTime="#000" 
                               priceTotal="199руб" color="#EC9A29" 
                               btnColor="linear-gradient(to right, #e8e8e8, #e8e8e8, #e8e8e8, #e8e8e8)" 
                               btnBorder="2px solid #EC9A29" 
                               shadow="1px 1px 10px 2px #EC9A29" 
                               margin="2em" bgColor="#e8e8e8"/>
            <PremiumSingleCard time="3 Месяца" colorTime="#66D9A2" 
                               priceMonth="169 руб/мес" priceTotal="199руб" color="#fff" 
                               btnColor="linear-gradient(to right, #66D9A2, #66d9a175, #66d9a175, #66D9A2)" 
                               btnBorder="none" shadow="1px 1px 10px 4px #66D9A2"/>
            <PremiumSingleCard time="6 Месяцев" colorTime="#66D9A2" 
                               priceMonth="149 руб/мес" priceTotal="849руб" color="#fff" 
                               btnColor="linear-gradient(to right, #66D9A2, #66d9a175, #66d9a175, #66D9A2)" 
                               btnBorder="none" shadow="1px 1px 10px 4px #66D9A2"/>
            <PremiumSingleCard time="1 Год" colorTime="#66D9A2" 
                               priceMonth="129 руб/мес" priceTotal="1548руб" color="#fff" 
                               btnColor="linear-gradient(to right, #66D9A2, #66d9a175, #66d9a175, #66D9A2)" 
                               btnBorder="none" shadow="1px 1px 10px 4px #66D9A2"/>
        </div>
        </>
        // style={{backgroundImage: "linear-gradient(to right, #fff, #fff, #fff, #fff)", border: "2px solid #EC9A29"}}
    )
}

export default PremiumCards;