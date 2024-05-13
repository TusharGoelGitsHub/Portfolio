import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CustomCard from "../CustomCard/CustomCard";
import { IExperienceItem } from "./ExperienceComponent.types";
import { constants } from "../../Constants";

const ExperienceComponent = (props: {
  data: IExperienceItem[];
}): JSX.Element => {
  return (
    <React.Fragment>
      <Navbar />
      <div
        style={{
          paddingTop: 110,
          gap: 5,
          fontSize: 36,
          color: "#A2A89E",
          marginLeft: "25%",
        }}
      >
        <span
          style={{
            color: "#d8314a",
            fontFamily: "Borel",
          }}
        >
          {constants.journey}
        </span>
        <span>{constants.soFar}</span>
      </div>
      <div>
        {props.data.map((item, index) => {
          return (
            <div
              style={{
                marginBottom: 50,
                marginTop: index === 0 ? 50 : 0,
                justifyContent: "center",
                display: "flex",
              }}
            >
              <CustomCard key={index} data={item} />
            </div>
          );
        })}
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default ExperienceComponent;
