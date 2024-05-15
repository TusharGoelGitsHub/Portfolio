import { useState, useEffect } from "react";
import HomeComponent from "../HomeComponent/HomeComponent";
import { constants } from "../../Constants";
import { colors } from "../../Colors";

const LandingComponent = (): JSX.Element => {
  const [showName, setShowName] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowName(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showName ? (
        <div
          style={{
            color: colors.redCrimson,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontSize: "2.25rem",
            lineHeight: "2.5rem",
            cursor: "none",
            pointerEvents: "none",
            fontFamily: "Borel",
            fontWeight: 700,
          }}
        >
          {constants.name}
        </div>
      ) : (
        <HomeComponent />
      )}
    </>
  );
};

export default LandingComponent;
