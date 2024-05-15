import { mergeStyles } from "@fluentui/react";
import { colors } from "../../Colors";

export const navbarContainerStyles = mergeStyles({
  position: "fixed",
  display: "flex",
  height: 96,
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: colors.backgroundBlack,
  zIndex: 9999,
});

export const brandStyles = mergeStyles({
  color: colors.redCrimson,
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  marginLeft: "3%",
  fontSize: "3rem",
  fontWeight: 700,
  fontFamily: "Borel",
  cursor: "pointer",
  textDecoration: "none",
});

export const rightLinkStyles = mergeStyles({
  display: "flex",
  alignItems: "center",
  gap: "5%",
  width: "100%",
  justifyContent: "end",
  paddingRight: "2%",
});

export const pageLinkStyles = mergeStyles({
  color: colors.offWhite,
  fontSize: 16,
  textDecoration: "none",
});
