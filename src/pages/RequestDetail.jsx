import React from "react";
import Navbar from "../components/Navbar";

const RequestById = ({ match }) => {
  const data = {
    type: "การเรียน",
    topic: `HEAD ${match.params.reqId}`,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus est Loremipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetursadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam.",
    sub_detail: [
      {
        topic: "SUB HEAD 1",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus est Loremipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetursadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam.",
      },
      {
        topic: "SUB HEAD 2",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus est Loremipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetursadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam.",
      },
    ],
  };
  return (
    <div className="cus-container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="header">
        <div
          className="align-self-flex-end has-text-centered"
          style={{
            gridColumn: "1",
            alignSelf: "flex-end",
            fontFamily: "s-medium",
            fontSize: "1.5rem",
          }}
        >
          จำนวนผลโหวต 4
        </div>
        <div className="header-text" style={{ fontSize: "2rem" }}>
          {data.topic}
        </div>
        <span
          style={{
            color: "#bcbcbc",
            gridColumn: "3",
            alignSelf: "flex-end",
            fontFamily: "s-medium",
            fontSize: "1.5rem",
          }}
        >
          ประเภทข้อเสนอ : {data.type}
        </span>
      </div>
      <div className="container-content">
        <div
          className="container-menu"
          style={{ fontFamily: "s-medium", color: "var(--deepPurple)" }}
        >
          <div
            className="box"
            style={{ height: 217, background: "var(--lightPurple)" }}
          ></div>
          <p>รหัสนักศึกษา 600610749</p>
          <p>ปริญญา สีตะวัน</p>
          <button
            className="button is-success is-light has-margin-top-10"
            onClick={(e) => {
              e.currentTarget.disabled = true;
              e.currentTarget.textContent = "VOTED";
            }}
          >
            VOTE
          </button>
        </div>
        <div className="content has-padding-40" style={{ lineHeight: 2 }}>
          {data.description}
          {data.sub_detail.map((ct, idx) => (
            <div className="sub-content" key={idx}>
              <div style={{ fontSize: "2rem" }}>{ct.topic}</div>
              {ct.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequestById;
