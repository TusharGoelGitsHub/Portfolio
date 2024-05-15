import { mergeStyles } from "@fluentui/react";
import { colors } from "../../Colors";

export const containerStyles = mergeStyles({
  color: colors.redCrimson,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontSize: "2.25rem",
  lineHeight: "2.5rem",
  cursor: "none",
  pointerEvents: "none",
  fontFamily: "Borel",
  fontWeight: 700,
});
