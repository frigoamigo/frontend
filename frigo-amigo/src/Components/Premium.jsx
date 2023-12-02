import PremiumCards from "./PremiumCards";
import PremiumCircles from "./PremiumCircles";
import PremiumHeading from "./PremiumHeading";
import PremiumLowerText from "./PremiumLowerText";
import React from 'react';


const Premium = React.forwardRef((props, ref) => {
    return(
        <div className="container">
        <div ref={ref} className="premium-block">
            <PremiumHeading />
            <PremiumCards />
            <PremiumCircles />
            <PremiumLowerText />
        </div>
        </div>
    )
});

export default Premium;