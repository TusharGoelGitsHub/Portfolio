import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { colors } from "../../Colors";
import { constants } from "../../Constants";
import { Link } from "react-router-dom";
import HireMeComponent from "../HireMeComponent/HireMeComponent";
import Carousel from "../../Carousel/Carousel";

const HomeComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Navbar />
      <h1
        style={{
          textDecoration: "none",
          paddingTop: 370,

          fontSize: "6rem",
          fontFamily: "borel",
          margin: "0 10% 100px",
          cursor: "pointer",
        }}
      >
        <Link
          to="/about"
          style={{ textDecoration: "none", color: colors.offWhite }}
          onMouseOver={(e) => {
            e.currentTarget.style.textDecoration = "underline";
            e.currentTarget.style.color = colors.redCrimson;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.textDecoration = "none";
            e.currentTarget.style.color = colors.offWhite;
          }}
        >
          {constants.name}
        </Link>
      </h1>
      <div
        style={{
          margin: "120px 10% 0",
          color: colors.offWhite,
          cursor: "default",
          fontSize: 30,
        }}
      >
        <div>{constants.homeIntroduction1}</div>
        <div>
          {constants.homeIntroduction2}
          <span style={{ color: colors.redCrimson, cursor: "pointer" }}>
            <a
              href={constants.maqSoftwareLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: colors.redCrimson,
                cursor: "pointer",
              }}
            >
              {`@${constants.maqSoftware}`}
            </a>
          </span>
        </div>
        <div>{constants.homeIntroduction3}</div>
        <div>
          {constants.homeIntroduction4}
          <span style={{ cursor: "pointer" }}>
            <Link
              to="/experience"
              style={{ textDecoration: "none", color: colors.redCrimson }}
            >
              {constants.experience.toLowerCase()}
            </Link>
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: colors.offWhite,
            cursor: "pointer",
            border: `1px ${colors.offWhite} solid`,
            fontSize: "1.25rem",
            padding: 8,
            width: 160,
            borderRadius: 8,
            margin: "24px 0",
          }}
        >
          <Link
            to="/about"
            style={{
              color: colors.offWhite,
              textDecoration: "none",
            }}
          >{`${constants.moreAboutMe} >`}</Link>
        </div>
      </div>
      <div style={{ marginTop: 200 }}>
        <HireMeComponent />
      </div>
      <div style={{ marginTop: 100, marginBottom: 70 }}>
        <div
          style={{
            color: colors.offWhite,
            fontSize: 36,
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          {constants.everythingYouNeed}{" "}
          <span style={{ color: colors.redCrimson, fontFamily: "borel" }}>
            {constants.perfect}
          </span>
          {constants.website}
        </div>
        <Carousel />
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default HomeComponent;
