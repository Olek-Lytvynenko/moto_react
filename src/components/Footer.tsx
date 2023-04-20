import Card from "./Card";
import { footerData } from "../api/footerData";

function Footer () {
  const contact = footerData.filter(data => data.group === 'contact');
  const social = footerData.filter(data => data.group !== 'contact');
  return (
    <div id="contact" className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__container-contact">
            {contact.map(data => (<Card data={data}/>))}
          </div>
          <div className="footer__line"></div>
          <div className="footer__container-social">
            {social.map(data => ( <Card data={data}/>))}
          </div>          
          <p className="footer__copyright">
            Copyright © &thinsp;
            <a className="footer__link" href="https://themeforest.net/user/codecarnival/portfolio">
              CodeCarnival. &ensp;
            </a>
            All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
