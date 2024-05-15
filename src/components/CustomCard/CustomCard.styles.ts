import { mergeStyles } from "@fluentui/react";
import { colors } from "../../Colors";

export const cardContainerStyles = () =>
  mergeStyles({
    width: "50%",
    background: colors.secondaryBlack,
    borderRadius: 8,
    borderLeft: `5px ${colors.redCrimson} solid`,
    paddingLeft: 25,
    paddingBottom: 25,
    paddingRight: 25,
    "&:hover": {
      background: "radial-gradient(circle, #121217 0, #252525 100%)",
    },
  });

export const mainHeadingStyles = mergeStyles({
  fontSize: 30,
  color: colors.redCrimson,
});

export const headingStyles = mergeStyles({
  fontSize: 30,
  color: colors.offWhite,
});

export const periodStyles = mergeStyles({
  color: colors.lightGrey,
  fontSize: 24,
});

export const contentContainerStyles = mergeStyles({
  color: colors.offWhite,
  fontSize: 24,
  display: "flex",
  alignItems: "center",
  gap: 15,
  width: "100%",
});

export const contentStyles = mergeStyles({
  display: "flex",
  justifyContent: "start",
});

export const dataStyles = mergeStyles({
  margin: 8,
});
