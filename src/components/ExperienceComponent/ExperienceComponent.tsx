import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CustomCard from "../CustomCard/CustomCard";
import { IExperienceItem } from "./ExperienceComponent.types";
import { constants } from "../../Constants";
import { colors } from "../../Colors";

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
          color: colors.offWhite,
          marginLeft: "25%",
          cursor: "default",
        }}
      >
        <span
          style={{
            color: colors.redCrimson,
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
                cursor: "default",
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
