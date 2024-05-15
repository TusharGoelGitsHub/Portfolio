import React from "react";
import { constants } from "../../Constants";
import { colors } from "../../Colors";

const Footer = (): JSX.Element => {
  return (
    <React.Fragment>
      <div style={{ padding: "24px 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2%",
            alignItems: "center",
            fontSize: 20,
          }}
        >
          <a
            href={constants.linkedinLink}
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
            {constants.linkedin}
          </a>
          <a
            href={`mailto:${constants.emailId}`}
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
            {constants.email}
          </a>
          <a
            href={constants.githubLink}
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
            {constants.github}
          </a>
          <a
            href={constants.resumeLink}
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
            {constants.resume}
          </a>
        </div>
        <div
          style={{
            color: colors.offWhite,
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            gap: 5,
            fontSize: 20,
            cursor: "default",
          }}
        >
          <span> {constants.developedBy}</span>
          <a
            href={constants.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: colors.redCrimson,
              fontFamily: "Borel",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            <span>{constants.developerName}</span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
