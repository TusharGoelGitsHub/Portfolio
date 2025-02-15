import React from "react";
import { ICustomCardProps } from "./CustomCard.types";
import {
  cardContainerStyles,
  contentContainerStyles,
  contentStyles,
  dataStyles,
  headingStyles,
  mainHeadingStyles,
  periodStyles,
} from "./CustomCard.styles";

const CustomCard = (props: ICustomCardProps): JSX.Element => {
  return (
    <React.Fragment>
      <div className={cardContainerStyles()}>
        {props.data?.mainHeading && (
          <h2 className={mainHeadingStyles}>{props.data.mainHeading}</h2>
        )}
        <h2 className={headingStyles}>{props.data.subHeading}</h2>
        {props.data?.period && (
          <p className={periodStyles}>{props.data.period}</p>
        )}
        <div>
          {props.data.content.map((val, index) => {
            return (
              <div key={index} className={contentContainerStyles}>
                <div className={contentStyles}>{">"}</div>
                <p className={dataStyles}>{val}</p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default CustomCard;
