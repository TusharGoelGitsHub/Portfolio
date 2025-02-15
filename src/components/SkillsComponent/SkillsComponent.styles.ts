import { mergeStyles } from "@fluentui/react";
import { colors } from "../../Colors";

export const skillsStyles = mergeStyles({
  paddingTop: 110,
  gap: 5,
  fontSize: 36,
  color: colors.offWhite,
  width: "50%",
  margin: "0 0 0 25%",
  cursor: "default",
});

export const skillsHeadingStyles = mergeStyles({
  color: colors.redCrimson,
  fontFamily: "Borel",
  alignItems: "end",
});

export const itemStyles = (index: number) =>
  mergeStyles({
    marginBottom: 50,
    marginTop: index === 0 ? 50 : 0,
    justifyContent: "center",
    display: "flex",
    cursor: "default",
  });
