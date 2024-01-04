import FooterContacts from './FooterContacts';
import Heading from '../Heading';
import React from 'react';

const Footer = React.forwardRef((props, ref) => {
  return (
    <div className="container">
      <div ref={ref} className="footer-heading">
        <div className="footer-heading-web-desktop">
          <Heading heading="Контакты" lineWidth="9em" lineMargin="0.455em" />
        </div>
        <div className="footer-heading-web-mobile">
          <Heading heading="Контакты" lineWidth="3em" lineMargin="0.5em" />
        </div>
      </div>
      <FooterContacts />
    </div>
  );
});

export default Footer;
