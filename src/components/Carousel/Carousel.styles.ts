import { mergeStyles } from "@fluentui/react";

export const carouselContainerStyles = mergeStyles({
  position: "relative",
  width: "60%",
  margin: "auto",
  overflow: "hidden",
});

export const containerStyles = mergeStyles({
  minWidth: "100%",
});

export const leftButtonStyles = mergeStyles({
  position: "absolute",
  top: "50%",
  left: "10px",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "24px",
  color: "#fff",
});

export const rightButtonStyles = mergeStyles({
  position: "absolute",
  top: "50%",
  right: "10px",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "24px",
  color: "#fff",
});
