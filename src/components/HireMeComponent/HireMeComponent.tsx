import React from "react";
import HomeCustomCard from "../HomeCustomCard/HomeCustomCard";
import { constants } from "../../Constants";

const HireMeComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "49%" }}>
            <HomeCustomCard
              heading={constants.visitGithubProfile}
              font={24}
              margin={"0 1% 14px"}
              padding={16}
              height={278}
              link={constants.githubLink}
            />
          </div>
          <div style={{ width: "49%" }}>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "49%" }}>
            <HomeCustomCard
              heading={constants.visitLinkedin}
              font={24}
              margin={"0 1% 14px"}
              padding={16}
              height={278}
              link={constants.linkedinLink}
            />
          </div>
          <div style={{ width: "49%" }}>
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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "49%" }}>
            <HomeCustomCard
              heading={constants.downloadMyResume}
              font={24}
              margin={"0 1% 14px"}
              padding={16}
              height={278}
              isDownloadResume
            />
          </div>
          <div style={{ width: "49%" }}>
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
