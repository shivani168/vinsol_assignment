import React from "react";
import MainScreen from "../components/MainScreeen";

export default function WrapperScreen() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        height: "100vh",
        background: "darkorange",
      }}
    >
      <div
        style={{
          marginTop: "20px",
          fontSize: "22px",
          fontWeight: "500",
          color:"white"
        }}
      >
        Welcome! To the Quiz
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          marginTop: "20px",
        }}
      >
        <MainScreen />
      </div>
    </div>
  );
}
