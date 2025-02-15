import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CustomCard from "../CustomCard/CustomCard";
import { IExperienceItem } from "./ExperienceComponent.types";
import { constants } from "../../Constants";
import {
  dataStyles,
  experienceContainerStyles,
  headingStyles,
} from "./ExperienceComponent.styles";

const ExperienceComponent = (props: {
  data: IExperienceItem[];
}): JSX.Element => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={experienceContainerStyles}>
        <span className={headingStyles}>{constants.journey}</span>
        <span>{constants.soFar}</span>
      </div>
      <div>
        {props.data.map((item, index) => {
          return (
            <div className={dataStyles(index)}>
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
