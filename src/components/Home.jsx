import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/home.css";
import workingIllustration from "../assets/images/illustration-working.svg";
import brandRecognitionIcon from '../assets/images/icon-brand-recognition.svg'

function Home() {
  const [fullLink, setFullLink] = useState("");
  const [links, setLinks] = useState([]);

  const handleInputChange = (e) => {
    setFullLink(e.target.value);
  };

  const handleShortenButtonClick = () => {
    setLinks([
      ...links,
      {
        fullLink: fullLink,
        shortLink: "abc",
      },
    ]);
  };

  console.log(links);

  return (
    <>
      <Navbar />
      <div className="home__container">
        <div className="home__heading__picture">
          <div className="home__heading__left__side">
            <p className="home__heading">More than just shorter links</p>
            <span className="subheading">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </span>
            <button className="get__started__button">Get Started</button>
          </div>
          <img
            src={workingIllustration}
            className="home__heading__right__side"
          />
        </div>
        <div className="home__body__container">
          <div className="url__shortener__container">
            <input
              className="url__shortener__input"
              onChange={(e) => handleInputChange(e)}
              type="text"
            />
            <button
              className="shorten__button"
              onClick={handleShortenButtonClick}
            >
              Shorten It!
            </button>
          </div>
          <div className="link__list__container">
            {links.map((item) => {
              return (
                <ul className="link__list">
                  <span className="full__link">{item.fullLink}</span>
                  <span className="short__link">{item.shortLink}</span>
                  <button>Copy</button>
                </ul>
              );
            })}
          </div>
          <div className="home__body__heading__subheading__container">
            <p className="home__body__heading">Advanced Statistics</p>
              <p className="home__body__subheading">
              Track how your links are performing across the web with our advanced statistics dashboard.
              </p>
          </div>
          <div className="home__body__card__container">
            <div className="card">
              <img src={brandRecognitionIcon} className="card__image" />
              <p className="card__heading">Brand Recognition</p>
              <p className="card__subheading">
              Track how your links are performing across the web with our advanced statistics dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;