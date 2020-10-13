import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        fontFamily: "s-reg",
        alignItems: "center",
        height: "100%",
        fontSize: 50,
        color: "#623688",
      }}
    >
      <img src="/plane.gif" alt="" />
    </div>
  );
};

export default Loading;
