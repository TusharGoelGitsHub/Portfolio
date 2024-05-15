import React from "react";
import { IHomeCustomCardProps } from "./HomeCustomCard.types";
import { colors } from "../../Colors";
import { Link } from "react-router-dom";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

const HomeCustomCard = (props: IHomeCustomCardProps): JSX.Element => {
  return (
    <React.Fragment>
      <div
        style={{
          margin: props.margin,
          color: colors.offWhite,
          fontSize: props.font,
          background: colors.secondaryBlack,
          padding: props.padding,
          borderRadius: 8,
          width: props.width,
          height: props.height,
          display: props.isMusicPlayer ? "block" : "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "default",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background =
            "radial-gradient(circle, #121217 0, #252525 100%)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = colors.secondaryBlack;
        }}
      >
        <div style={{ textAlign: "center", cursor: "pointer" }}>
          {props.link && (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: colors.offWhite,
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.color = colors.redCrimson;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.textDecoration = "none";
                e.currentTarget.style.color = colors.offWhite;
              }}
            >
              {props.heading}
            </a>
          )}
          {props.redirectLink && (
            <Link
              to={props.redirectLink}
              style={{ color: colors.offWhite, textDecoration: "none" }}
              onMouseOver={(e) => {
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.color = colors.redCrimson;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.textDecoration = "none";
                e.currentTarget.style.color = colors.offWhite;
              }}
            >
              {props.heading}
            </Link>
          )}
          {props.isDownloadResume && (
            <a
              href="/TusharGoel_SoftwareEngineer__3YOE.pdf"
              download="Tushar_Goel_resume.pdf"
              style={{
                textDecoration: "none",
                color: colors.offWhite,
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.color = colors.redCrimson;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.textDecoration = "none";
                e.currentTarget.style.color = colors.offWhite;
              }}
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
