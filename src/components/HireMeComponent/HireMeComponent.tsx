import React from "react";
import HomeCustomCard from "../HomeCustomCard/HomeCustomCard";
import { constants } from "../../Constants";
import { cardStyles, hireContainerStyles } from "./HireMeComponent.styles";

const HireMeComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <div className={hireContainerStyles}>
          <div className={cardStyles}>
            <HomeCustomCard
              heading={constants.visitGithubProfile}
              font={24}
              margin={"0 1% 14px"}
              padding={16}
              height={278}
              link={constants.githubLink}
            />
          </div>
          <div className={cardStyles}>
            <HomeCustomCard
              heading={constants.workDesc}
              font={24}
              margin={"0 1% 14px"}
              padding={16}
              height={278}
              redirectLink={"/experience"}
            />
          </div>
        </div>
        <div className={hireContainerStyles}>
          <div className={cardStyles}>
            <HomeCustomCard
              heading={constants.visitLinkedin}
              font={24}
              margin={"0 1% 14px"}
              padding={16}
              height={278}
              link={constants.linkedinLink}
            />
          </div>
          <div className={cardStyles}>
            <HomeCustomCard
              heading={constants.technologies}
              font={24}
              margin={"0 1% 14px"}
              padding={16}
              height={278}
              redirectLink={"/skills"}
            />
          </div>
        </div>

        <div className={hireContainerStyles}>
          <div className={cardStyles}>
            <HomeCustomCard
              heading={constants.downloadMyResume}
              font={24}
              margin={"0 1% 14px"}
              padding={16}
              height={278}
              isDownloadResume
            />
          </div>
          <div className={cardStyles}>
            <HomeCustomCard
              font={24}
              margin={"0 1% 14px"}
              padding={16}
              height={278}
              isMusicPlayer
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HireMeComponent;
