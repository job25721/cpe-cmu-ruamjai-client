import React from "react";
import Navbar from "../components/Navbar";
// import { IonIcon } from "@ionic/react";
// import { checkmarkOutline, closeOutline } from "ionicons/icons";
const RequestById = ({ match }) => {
  const data = {
    type: "การเรียน",
    topic: `HEAD ${match.params.petitionId}`,
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
      <div className="detail-header">
        <div className="detail-header-voting">จำนวนผลโหวต 4</div>
        <div className="detail-header-name">{data.topic}</div>
        <div className="detail-header-type">ประเภทข้อเสนอ : {data.type}</div>
      </div>
      <div className="container-content">
        <div className="detail-menu-container">
          <div className="detail-personal-info">
            <div
              className="box"
              style={{
                backgroundColor: "var(--lightPurple)",
                width: "100%",
                height: "auto",
                maxHeight: "300px",
                minHeight: "250px",
              }}
            ></div>
            <p>ปริญญา สีตะวัน</p>
            <p>600610749</p>
          </div>
          <div className="detail-vote-button">
            <button
              className="button-agree"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.currentTarget.disabled = true;
                e.currentTarget.classList.add("disabled");
                e.currentTarget.textContent = "VOTED";
              }}
            >
              VOTE
            </button>
          </div>
        </div>
        <div
          className="container-cards "
          style={{ lineHeight: 2, padding: 30 }}
        >
          <div
            style={{
              marginBottom: 15,
            }}
          >
            <span>{data.description}</span>
          </div>
          {data.sub_detail.map((ct, idx) => (
            <div className="sub-content" style={{ paddingLeft: 15 }} key={idx}>
              <div
                style={{ fontSize: "1rem", color: "#623688", marginTop: 15 }}
              >
                {ct.topic}
              </div>
              {ct.description}
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div className="cus-container">
    //   <div className="nav">
    //     <Navbar />
    //   </div>
    //   <div className="header">
    //     <div
    //       className="align-self-flex-end has-text-centered"
    //       style={{
    //         gridColumn: "1",
    //         alignSelf: "flex-end",
    //         fontFamily: "s-medium",
    //         fontSize: "1.5rem",
    //         color: "var(--deepPurple)",
    //       }}
    //     >
    //       จำนวนผลโหวต 4
    //     </div>
    //     <div className="header-text" style={{ fontSize: "2rem" }}>
    //       {data.topic}
    //     </div>
    //     <span
    //       style={{
    //         color: "var(--grey)",
    //         gridColumn: "3",
    //         alignSelf: "flex-end",
    //         fontFamily: "s-medium",
    //         fontSize: "1.5rem",
    //       }}
    //     >
    //       ประเภทข้อเสนอ : {data.type}
    //     </span>
    //   </div>
    //   <div className="container-content">
    //     <div
    //       className="container-menu"
    //       style={{ fontFamily: "s-medium", color: "var(--deepPurple)" }}
    //     >
    //       <div>
    //         <div
    //           className="box"
    //           style={{ height: 217, background: "var(--lightPurple)" }}
    //         ></div>
    //         <p>รหัสนักศึกษา 600610749</p>
    //         <p>ปริญญา สีตะวัน</p>
    //       </div>
    //       <div className="flex-column">
    //         <button
    //           className="button is-success is-light has-margin-top-10"
    //           onClick={(e) => {
    //             e.currentTarget.disabled = true;
    //             e.currentTarget.textContent = "VOTED";
    //           }}
    //         >
    //           VOTE
    //         </button>
    //         <div className="buttons has-margin-10 justify-center">
    //           <div className="has-margin-20">
    //             <button
    //               className="button is-success"
    //               style={{
    //                 borderRadius: "50%",
    //                 width: 50,
    //                 height: 50,
    //               }}
    //               onClick={() => alert("Accepted")}
    //             >
    //               <IonIcon icon={checkmarkOutline} style={{}} />
    //             </button>
    //             <p>Approve</p>
    //           </div>
    //           <div className="has-margin-20">
    //             <button
    //               className="button is-danger"
    //               style={{ borderRadius: "50%", width: 50, height: 50 }}
    //               onClick={() => alert("rejected")}
    //             >
    //               <IonIcon icon={closeOutline} />
    //             </button>
    //             <p>Reject</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="content has-padding-40" style={{ lineHeight: 2 }}>
    //       {data.description}
    //       {data.sub_detail.map((ct, idx) => (
    //         <div className="sub-content" key={idx}>
    //           <div style={{ fontSize: "2rem" }}>{ct.topic}</div>
    //           {ct.description}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default RequestById;
