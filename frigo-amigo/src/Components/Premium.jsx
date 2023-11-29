import PremiumCards from "./PremiumCards";
import PremiumCircles from "./PremiumCircles";
import PremiumHeading from "./PremiumHeading";
import PremiumLowerText from "./PremiumLowerText";


const Premium = () => {
    return(
        <>
        <div className="premium-block">
            <PremiumHeading />
            <PremiumCards />
            <PremiumCircles />
            <PremiumLowerText />
        </div>
        </>
    )
}

export default Premium;