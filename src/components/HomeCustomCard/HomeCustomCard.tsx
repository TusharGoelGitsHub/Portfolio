import React from "react";
import { IHomeCustomCardProps } from "./HomeCustomCard.types";
import { Link } from "react-router-dom";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import {
  componentContainerStyles,
  homeCardContainerStyles,
  linkStyles,
} from "./HomeCustomCard.styles";

const HomeCustomCard = (props: IHomeCustomCardProps): JSX.Element => {
  return (
    <React.Fragment>
      <div
        className={homeCardContainerStyles(
          props.margin,
          props.font,
          props.padding,
          props.width,
          props.height,
          props.isMusicPlayer
        )}
      >
        <div className={componentContainerStyles}>
          {props.link && (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
            >
              {props.heading}
            </a>
          )}
          {props.redirectLink && (
            <Link to={props.redirectLink} className={linkStyles}>
              {props.heading}
            </Link>
          )}
          {props.isDownloadResume && (
            <a
              href="/TusharGoel_SoftwareEngineer.pdf"
              download="TusharGoel_SoftwareEngineer.pdf"
              className={linkStyles}
            >
              {props.heading}
            </a>
          )}
          {props.isMusicPlayer && <MusicPlayer />}

          {!props.link &&
            !props.redirectLink &&
            !props.isDownloadResume &&
            !props.isMusicPlayer &&
            props.heading}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeCustomCard;
