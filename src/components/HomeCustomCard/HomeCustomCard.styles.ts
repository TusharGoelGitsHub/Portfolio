import { mergeStyles } from "@fluentui/react";
import { colors } from "../../Colors";

export const homeCardContainerStyles = (
  margin: string,
  font: number,
  padding: number,
  width?: string,
  height?: number,
  isMusicPlayer?: boolean
) =>
  mergeStyles({
    margin: margin,
    color: colors.offWhite,
    fontSize: font,
    background: colors.secondaryBlack,
    padding: padding,
    borderRadius: 8,
    width: width,
    height: height,
    display: isMusicPlayer ? "block" : "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "default",
    "&:hover": {
      background: "radial-gradient(circle, #121217 0, #252525 100%)",
    },
  });

export const componentContainerStyles = mergeStyles({
  textAlign: "center",
  cursor: "pointer",
});

export const linkStyles = mergeStyles({
  textDecoration: "none",
  color: colors.offWhite,
  cursor: "pointer",
  "&:hover": {
    color: colors.redCrimson,
    textDecoration: "underline",
  },
});
