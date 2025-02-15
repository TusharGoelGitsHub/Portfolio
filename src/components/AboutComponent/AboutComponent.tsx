import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { constants } from "../../Constants";
import { colors } from "../../Colors";

const AboutComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Navbar />
      <h2
        style={{
          color: colors.redCrimson,
          fontSize: 48,
          margin: "0 10% 0 10%",
          paddingTop: 180,
          cursor: "default",
        }}
      >
        {constants.hi},
      </h2>
      <h2
        style={{
          color: colors.redCrimson,
          fontSize: 48,
          margin: "0 10% 30px 10%",
          cursor: "default",
        }}
      >
        {constants.iAm}
      </h2>
      <h2
        style={{
          color: colors.offWhite,
          fontSize: 72,
          margin: "0 10% 0 10%",
          fontFamily: "borel",
          cursor: "default",
        }}
      >
        {constants.name}
      </h2>
      <p
        style={{
          color: colors.offWhite,
          fontSize: 22,
          margin: "30px 11% 0 11%",
          cursor: "default",
        }}
      >
        <span>{constants.introduction1}</span>
        <span
          style={{
            color: colors.redCrimson,
            fontFamily: "borel",
          }}
        >
          {constants.maqSoftware}
        </span>
        <span>{constants.introduction2}</span>
        <span
          style={{
            color: colors.redCrimson,
            fontFamily: "borel",
          }}
        >
          {constants.tcs}
        </span>
        <span> {constants.introduction3}</span>
      </p>
      <p
        style={{
          color: colors.offWhite,
          fontSize: 22,
          cursor: "default",
          margin: "30px 11% 30px 11%",
        }}
      >
        {constants.introduction4}
      </p>

      <Footer />
    </React.Fragment>
  );
};
export default AboutComponent;
