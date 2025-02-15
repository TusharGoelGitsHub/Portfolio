import React from "react";
import ExperienceComponent from "../components/ExperienceComponent/ExperienceComponent";
import { ExperienceData } from "../components/ExperienceComponent/ExperienceComponent.types";

const ExperiencePage = (): JSX.Element => {
  return (
    <React.Fragment>
      <ExperienceComponent data={ExperienceData} />
    </React.Fragment>
  );
};

export default ExperiencePage;
