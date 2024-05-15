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
          <div style={{ width: "25%" }}>
            <div>
              <HomeCustomCard
                heading={constants.visitGithubProfile}
                font={20}
                margin={"0 1% 14px"}
                padding={16}
                height={278}
                link={constants.githubLink}
              />
            </div>
            <div>
              <HomeCustomCard
                heading={constants.workDesc}
                font={20}
                margin={"0 1% 14px"}
                padding={16}
                height={278}
                redirectLink={"/experience"}
              />
            </div>
          </div>
          <div style={{ width: "73%" }}>
            <HomeCustomCard
              font={20}
              margin={"0 1% 14px"}
              padding={16}
              height={600}
              isTodoApp
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
          <div style={{ width: "25%" }}>
            <div>
              <HomeCustomCard
                heading={constants.visitLinkedin}
                font={20}
                margin={"0 1% 14px"}
                padding={16}
                height={278}
                link={constants.linkedinLink}
              />
            </div>
            <div>
              <HomeCustomCard
                heading={constants.technologies}
                font={20}
                margin={"0 1% 14px"}
                padding={16}
                height={278}
                redirectLink={"/skills"}
              />
            </div>
          </div>
          <div style={{ width: "73%" }}>
            <HomeCustomCard
              font={20}
              margin={"0 1% 14px"}
              padding={16}
              height={600}
              isTicTacToeGame
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
              font={20}
              margin={"0 1.5% 14px 1%"}
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
