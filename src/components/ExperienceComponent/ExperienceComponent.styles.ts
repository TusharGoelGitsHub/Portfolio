import { mergeStyles } from "@fluentui/react";
import { colors } from "../../Colors";

export const experienceContainerStyles = mergeStyles({
  paddingTop: 110,
  gap: 5,
  fontSize: 36,
  color: colors.offWhite,
  marginLeft: "25%",
  cursor: "default",
});

export const headingStyles = mergeStyles({
  color: colors.redCrimson,
  fontFamily: "Borel",
});

export const dataStyles = (index: number) =>
  mergeStyles({
    marginBottom: 50,
    marginTop: index === 0 ? 50 : 0,
    justifyContent: "center",
    display: "flex",
    cursor: "default",
  });
