import React from "react";
import { constants } from "../../Constants";
import { Link } from "react-router-dom";
import { colors } from "../../Colors";

const Navbar = (): JSX.Element => {
  return (
    <React.Fragment>
      <div
        style={{
          position: "fixed",
          display: "flex",
          height: 96,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: colors.backgroundBlack,
          zIndex: 9999,
        }}
      >
        <Link
          to="/"
          style={{
            color: colors.redCrimson,
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            marginLeft: "3%",
            fontSize: "3rem",
            fontWeight: 700,
            fontFamily: "Borel",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          {constants.brandName}
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5%",
            width: "100%",
            justifyContent: "end",
            paddingRight: "2%",
          }}
        >
          <Link
            to="/about"
            style={{
              color: colors.offWhite,
              fontSize: 16,
              textDecoration: "none",
            }}
          >
            {constants.about}
          </Link>
          <Link
            to="/skills"
            style={{
              color: colors.offWhite,
              fontSize: 16,
              textDecoration: "none",
            }}
          >
            {constants.skills}
          </Link>
          <Link
            to="/experience"
            style={{
              color: colors.offWhite,
              fontSize: 16,
              textDecoration: "none",
            }}
          >
            {constants.experience}
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
