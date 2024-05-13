import React from "react";
import { ICustomCardProps } from "./CustomCard.types";

const CustomCard = (props: ICustomCardProps): JSX.Element => {
  return (
    <React.Fragment>
      <div
        style={{
          height: props.height,
          width: "50%",
          background: "#121217",
          borderRadius: 8,
          borderLeft: "5px #d8314a solid",
          paddingLeft: 25,
          paddingBottom: 25,
          paddingRight: 25,
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background =
            "radial-gradient(circle, #121217 0, #252525 100%)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "#121217";
        }}
      >
        {props.data?.mainHeading && (
          <h2 style={{ fontSize: 30, color: "#d8314a" }}>
            {props.data.mainHeading}
          </h2>
        )}
        <h2 style={{ fontSize: 30, color: "#A2A89E" }}>
          {props.data.subHeading}
        </h2>
        {props.data?.period && (
          <p style={{ color: "#6B7280", fontSize: 24 }}>{props.data.period}</p>
        )}
        <div>
          {props.data.content.map((val, index) => {
            return (
              <div
                key={index}
                style={{
                  color: "#A2A89E",
                  fontSize: 24,
                  display: "flex",
                  // justifyContent: "space-between",
                  alignItems: "center",
                  gap: 15,
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                  }}
                >
                  {">"}
                </div>
                <p style={{ margin: 8 }}>{val}</p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default CustomCard;
