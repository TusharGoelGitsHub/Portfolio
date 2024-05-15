import React from "react";
import { ICarouselCardProps } from "./CarouselCard.types";
import { carouselCardStyles } from "./CarouselCard.styles";

const CarouselCard = (props: ICarouselCardProps): JSX.Element => {
  return (
    <React.Fragment>
      <div className={carouselCardStyles.root}>
        <h2 className={carouselCardStyles.heading}>{props.data.heading}</h2>
        <div className={carouselCardStyles.description}>
          {props.data.description}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CarouselCard;
