import React from "react";
import Navbar from "../components/Navbar";

const RequestById = ({ match }) => {
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
          HEAD
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
          ประเภทข้อเสนอ
        </span>
      </div>
      <div className="container-content">
        <div className="container-menu"></div>
        <div className="content has-padding-40" style={{ lineHeight: 2 }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam.
          <div>
            <div style={{ fontSize: "2rem" }}>SUB HEAD</div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
            dolore at, nemo deserunt doloribus architecto necessitatibus
            consequatur exercitationem rerum recusandae vitae dolor, officiis id
            quidem cumque. Ut molestiae amet obcaecati! Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Id hic, ipsum alias dolores
            accusantium nemo voluptas unde est possimus impedit minus.
            Praesentium aspernatur explicabo architecto tempora unde aliquam
            corporis eius.
          </div>
        </div>
      </div>
      {/* {match.params.reqId} */}
    </div>
  );
};

export default RequestById;
