import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CustomCard from "../CustomCard/CustomCard";
import { constants } from "../../Constants";
import { ISkillsItem } from "./SkillsComponent.types";
import { colors } from "../../Colors";

const SkillsComponent = (props: { data: ISkillsItem[] }): JSX.Element => {
  return (
    <React.Fragment>
      <Navbar />
      <p
        style={{
          paddingTop: 110,
          gap: 5,
          fontSize: 36,
          color: colors.offWhite,
          width: "50%",
          margin: "0 0 0 25%",
          cursor: "default",
        }}
      >
        <span>{constants.skillsHeading}</span>
        <span
          style={{
            color: colors.redCrimson,
            fontFamily: "Borel",

            alignItems: "end",
          }}
        >
          {constants.skillsExperienced}
        </span>
        <span>{constants.in}</span>
      </p>
      <div>
        {props.data.map((item, index) => {
          return (
            <div
              style={{
                marginBottom: 50,
                marginTop: index === 0 ? 50 : 0,
                justifyContent: "center",
                display: "flex",
                cursor: "default",
              }}
            >
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
