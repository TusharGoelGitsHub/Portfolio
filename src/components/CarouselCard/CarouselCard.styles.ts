import { mergeStyles } from "@fluentui/react";
import { colors } from "../../Colors";

export const carouselCardStyles = {
  root: mergeStyles({
    width: "100%",
    background: colors.secondaryBlack,
    cursor: "default",
    margin: "auto",
    borderRadius: 8,
  }),
  heading: mergeStyles({
    color: colors.redCrimson,
    fontSize: 30,
    textAlign: "center",
    padding: "12% 25% 0%",
  }),
  description: mergeStyles({
    color: colors.offWhite,
    fontSize: 24,
    textAlign: "center",
    padding: "2% 15% 12%",
  }),
};
