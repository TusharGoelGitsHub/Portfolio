import React from "react";
import { constants } from "../../Constants";
import { colors } from "../../Colors";
import {
  contentContainerStyles,
  contentStyles,
  developedByStyles,
  footerContainerStyles,
  nameStyles,
} from "./Footer.styles";

const Footer = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className={footerContainerStyles}>
        <div className={contentContainerStyles}>
          <a
            href={constants.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className={contentStyles}
          >
            {constants.linkedin}
          </a>
          <a
            href={`mailto:${constants.emailId}`}
            target="_blank"
            rel="noopener noreferrer"
            className={contentStyles}
          >
            {constants.email}
          </a>
          <a
            href={constants.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={contentStyles}
          >
            {constants.github}
          </a>
          <a
            href={constants.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={contentStyles}
          >
            {constants.resume}
          </a>
        </div>
        <div className={developedByStyles}>
          <span> {constants.developedBy}</span>
          <a
            href={constants.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className={nameStyles}
          >
            <span>{constants.developerName}</span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
