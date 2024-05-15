import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { colors } from "../../Colors";
import { constants } from "../../Constants";
import { Link } from "react-router-dom";
import HireMeComponent from "../HireMeComponent/HireMeComponent";
import Carousel from "../Carousel/Carousel";
import {
  linkStyles,
  homeContainerStyles,
  introStyles,
  companyStyles,
  experienceStyles,
  experienceLinkStyles,
  aboutContainerStyles,
  aboutStyles,
  buttonStyles,
  hireStyles,
  intro2Styles,
  carouselContainerStyles,
  headingStyles,
  perfectStyles,
} from "./HomeComponent.styles";

const HomeComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Navbar />
      <h1 className={homeContainerStyles}>
        <Link to="/about" className={linkStyles}>
          {constants.name}
        </Link>
      </h1>
      <div className={introStyles}>
        <div>{constants.homeIntroduction1}</div>
        <div>
          {constants.homeIntroduction2}
          <span className={intro2Styles}>
            <a
              href={constants.maqSoftwareLink}
              target="_blank"
              rel="noopener noreferrer"
              className={companyStyles}
            >
              {`@${constants.maqSoftware}`}
            </a>
          </span>
        </div>
        <div>{constants.homeIntroduction3}</div>
        <div>
          {constants.homeIntroduction4}
          <span className={experienceStyles}>
            <Link to="/experience" className={experienceLinkStyles}>
              {constants.experience.toLowerCase()}
            </Link>
          </span>
        </div>
      </div>

      <div className={aboutContainerStyles}>
        <div className={aboutStyles}>
          <Link
            to="/about"
            className={buttonStyles}
          >{`${constants.moreAboutMe} >`}</Link>
        </div>
      </div>
      <div className={hireStyles}>
        <HireMeComponent />
      </div>
      <div className={carouselContainerStyles}>
        <div className={headingStyles}>
          {constants.everythingYouNeed}
          <span className={perfectStyles}>{constants.perfect}</span>
          {constants.website}
        </div>
        <Carousel />
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default HomeComponent;
