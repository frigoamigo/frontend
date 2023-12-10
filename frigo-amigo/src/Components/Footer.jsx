import FooterContacts from "./FooterContacts";
import Heading from "./Heading";
import React from 'react';


const Footer = React.forwardRef((props, ref) => {
    return(
        <div className="container">
            <div ref={ref} className="footer-heading">
                <Heading heading="Контакты" lineWidth="9em" lineMargin="0.455em"/>
            </div>
            <FooterContacts />
        </div>
    )
});

export default Footer;