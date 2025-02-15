import React from "react";
import SkillsComponent from "../components/SkillsComponent/SkillsComponent";
import { SkillsData } from "../components/SkillsComponent/SkillsComponent.types";

const SkillsPage = (): JSX.Element => {
  return (
    <React.Fragment>
      <SkillsComponent data={SkillsData} />
    </React.Fragment>
  );
};

export default SkillsPage;
