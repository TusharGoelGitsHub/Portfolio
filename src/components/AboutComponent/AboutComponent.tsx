import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const AboutComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ height: 200, color: "white" }}></div>
      <Footer />
    </React.Fragment>
  );
};
export default AboutComponent;
