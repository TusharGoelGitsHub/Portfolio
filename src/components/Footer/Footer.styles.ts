import { mergeStyles } from "@fluentui/react";
import { colors } from "../../Colors";

export const footerContainerStyles = mergeStyles({
  padding: "24px 0",
});

export const contentContainerStyles = mergeStyles({
  display: "flex",
  justifyContent: "center",
  gap: "2%",
  alignItems: "center",
  fontSize: 20,
});

export const contentStyles = mergeStyles({
  textDecoration: "none",
  color: colors.offWhite,
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
    color: colors.redCrimson,
  },
});

export const developedByStyles = mergeStyles({
  color: colors.offWhite,
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  gap: 5,
  fontSize: 20,
  cursor: "default",
});

export const nameStyles = mergeStyles({
  cursor: "pointer",
  textDecoration: "none",
  color: colors.redCrimson,
  fontFamily: "Borel",
  "&:hover": {
    textDecoration: "underline",
  },
});
