import { mergeStyles } from "@fluentui/react";
import { colors } from "../../Colors";

export const homeContainerStyles = mergeStyles({
  textDecoration: "none",
  paddingTop: 370,
  fontSize: "6rem",
  fontFamily: "borel",
  margin: "0 10% 100px",
  cursor: "pointer",
});

export const linkStyles = mergeStyles({
  textDecoration: "none",
  color: colors.offWhite,
  "&:hover": {
    color: colors.redCrimson,
    textDecoration: "underline",
  },
});

export const companyStyles = mergeStyles({
  textDecoration: "none",
  color: colors.redCrimson,
  cursor: "pointer",
});

export const experienceStyles = mergeStyles({
  cursor: "pointer",
});

export const experienceLinkStyles = mergeStyles({
  textDecoration: "none",
  color: colors.redCrimson,
});

export const aboutStyles = mergeStyles({
  color: colors.offWhite,
  cursor: "pointer",
  border: `1px ${colors.offWhite} solid`,
  fontSize: "1.25rem",
  padding: 8,
  width: 160,
  borderRadius: 8,
  margin: "24px 0",
});

export const buttonStyles = mergeStyles({
  color: colors.offWhite,
  textDecoration: "none",
});

export const hireStyles = mergeStyles({
  marginTop: 200,
});

export const introStyles = mergeStyles({
  margin: "120px 10% 0",
  color: colors.offWhite,
  cursor: "default",
  fontSize: 30,
});

export const aboutContainerStyles = mergeStyles({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const intro2Styles = mergeStyles({
  color: colors.redCrimson,
  cursor: "pointer",
});

export const carouselContainerStyles = mergeStyles({
  marginTop: 100,
  marginBottom: 70,
});

export const headingStyles = mergeStyles({
  color: colors.offWhite,
  fontSize: 36,
  textAlign: "center",
  marginBottom: 40,
  cursor: "default",
});

export const perfectStyles = mergeStyles({
  color: colors.redCrimson,
  fontFamily: "borel",
});
