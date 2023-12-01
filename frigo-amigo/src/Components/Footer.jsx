import FooterContacts from "./FooterContacts";
import Heading from "./Heading";


const Footer = () => {
    return(
        <div className="container">
            <div className="footer-heading">
                <Heading heading="Контакты" lineWidth="9em" lineMargin="0.455em"/>
            </div>
            <FooterContacts />
        </div>
    )
}

export default Footer;