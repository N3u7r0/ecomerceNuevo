import React from 'react';
import instagram from "../../assets/images/logosfooter/instagram.jpg";
import facebook from "../../assets/images/logosfooter/facebook.jpg";
import whatsapp from "../../assets/images/logosfooter/whatsapp.jpg";
import "./Footer.css";
export const Footer = () => {

  return (
    <footer >
      <h4>Contacto</h4>
      <li className='liFooter'>
        <ul className='ulFooter'>
          <img className='logoFooter' src={instagram} alt="logo insta" />
          <h6>Instagram:www.instagram/guitaron-ok</h6>
        </ul>
        <ul className='ulFooter'>
          <img className='logoFooter' src={facebook} alt="logo face" />
          <h6>Instagram:www.instagram/guitaron-ok</h6>
        </ul>
        <ul className='ulFooter'>
          <img className='logoFooter' src={whatsapp} alt="logo wpp" />
          <h6>Instagram:www.instagram/guitaron-ok</h6>
        </ul>
      </li>
    </footer>
  )

}
export default Footer;