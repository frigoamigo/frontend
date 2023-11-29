import FooterContacts from "./FooterContacts";
import Heading from "./Heading";


const Footer = () => {
    return(
        <>
            <div className="footer-heading">
                <Heading heading="Контакты" lineWidth="9em" lineMargin="0.455em"/>
            </div>
            <FooterContacts />
        </>
    )
}

export default Footer;