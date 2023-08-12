import React from "react";
import "../styles/footer.css";
import instagramIcon from "../assets/images/icon-instagram.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pintrestIcon from "../assets/images/icon-pinterest.svg";

function Footer() {
  return (
    <div className="footer__container">
      <h1 className="footer__item footer__logo">Shortly</h1>
      <div className="footer__item item__column">
        <p className="item__heading">Features</p>
        <p className="list__item">Link Shortening</p>
        <p className="list__item">Branded Links</p>
        <p className="list__item">Analytics</p>
      </div>
      <div className="footer__item item__column">
        <p className="item__heading">Features</p>
        <p className="list__item">Link Shortening</p>
        <p className="list__item">Branded Links</p>
        <p className="list__item">Analytics</p>
      </div>
      <div className="footer__item item__column">
        <p className="item__heading">Features</p>
        <p className="list__item">Link Shortening</p>
        <p className="list__item">Branded Links</p>
        <p className="list__item">Analytics</p>
      </div>
      <div className="social__meadia__icon__container ">
        <img src={facebookIcon} className="social__media_icon" />
        <img src={twitterIcon} className="social__media_icon"  />
        <img src={pintrestIcon} className="social__media_icon"  />
        <img src={instagramIcon}  className="social__media_icon" />
      </div>
    </div>
  );
}

export default Footer;
