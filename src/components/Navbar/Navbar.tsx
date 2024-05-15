import React from "react";
import { constants } from "../../Constants";
import { Link } from "react-router-dom";
import {
  brandStyles,
  navbarContainerStyles,
  pageLinkStyles,
  rightLinkStyles,
} from "./Navbar.styles";

const Navbar = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className={navbarContainerStyles}>
        <Link to="/" className={brandStyles}>
          {constants.brandName}
        </Link>
        <div className={rightLinkStyles}>
          <Link to="/about" className={pageLinkStyles}>
            {constants.about}
          </Link>
          <Link to="/skills" className={pageLinkStyles}>
            {constants.skills}
          </Link>
          <Link to="/experience" className={pageLinkStyles}>
            {constants.experience}
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
