import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CustomCard from "../CustomCard/CustomCard";
import { constants } from "../../Constants";
import { ISkillsItem } from "./SkillsComponent.types";

import {
  itemStyles,
  skillsHeadingStyles,
  skillsStyles,
} from "./SkillsComponent.styles";

const SkillsComponent = (props: { data: ISkillsItem[] }): JSX.Element => {
  return (
    <React.Fragment>
      <Navbar />
      <p className={skillsStyles}>
        <span>{constants.skillsHeading}</span>
        <span className={skillsHeadingStyles}>
          {constants.skillsExperienced}
        </span>
        <span>{constants.in}</span>
      </p>
      <div>
        {props.data.map((item, index) => {
          return (
            <div className={itemStyles(index)}>
              <CustomCard key={index} data={item} isSkills />
            </div>
          );
        })}
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default SkillsComponent;
