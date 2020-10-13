import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "s-reg",
        alignItems: "center",
        height: "100%",
        fontSize: "1rem",
        color: "#623688",
        position: "relative",
      }}
    >
      <img width="30%" src="/cloud.gif" alt="" />
      <span style={{ position: "absolute", top: "55%" }}>ไม่พบข้อมูล</span>
    </div>
  );
};

export default Loading;
