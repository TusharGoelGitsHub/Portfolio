import React from "react";
import { ICarouselCardProps } from "./CarouselCard.types";
import { colors } from "../Colors";

const CarouselCard = (props: ICarouselCardProps): JSX.Element => {
  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          background: colors.secondaryBlack,
          cursor: "default",
          margin: "auto",
          borderRadius: 8,
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background =
            "radial-gradient(circle, #121217 0, #252525 100%)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = colors.secondaryBlack;
        }}
      >
        <h2
          style={{
            color: colors.redCrimson,
            fontSize: 30,
            textAlign: "center",
            padding: "12% 25% 0%",
          }}
        >
          {props.data.heading}
        </h2>
        <div
          style={{
            color: colors.offWhite,
            fontSize: 24,
            textAlign: "center",
            padding: " 2% 15% 12%",
          }}
        >
          {props.data.description}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CarouselCard;
