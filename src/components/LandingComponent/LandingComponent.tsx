import { useState, useEffect } from "react";
import HomeComponent from "../HomeComponent/HomeComponent";
import { constants } from "../../Constants";
import { colors } from "../../Colors";
import { containerStyles } from "./LandingComponent.styles";

const LandingComponent = (): JSX.Element => {
  const [showName, setShowName] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowName(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showName ? (
        <div className={containerStyles}>{constants.name}</div>
      ) : (
        <HomeComponent />
      )}
    </>
  );
};

export default LandingComponent;
