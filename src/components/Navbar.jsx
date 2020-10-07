import React from "react";
import { personCircleOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import { links } from "../route";
export default () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <nav className="cus-navbar">
      <div className="brand">
        <h1>CPE CMU</h1>
        <h1>RUAMJAI</h1>
      </div>

      <ul className={isOpen ? "nav-link open" : "nav-link"}>
        <Link to={links.index}>
          <li>หน้าแรก</li>
        </Link>
        <Link to={links.allPetition}>
          <li>คำร้องทั้งหมด</li>
        </Link>
        <Link to={links.myPetitions}>
          <li>คำร้องของฉัน</li>
        </Link>

        <li>
          <IonIcon icon={personCircleOutline} style={{ fontSize: 50 }} />
        </li>
      </ul>

      <div
        className="hamburger"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    </nav>

    // <nav className="navbar has-margin-top-20 has-margin-bottom-20">
    //   <div className="navbar-brand">
    //     <div className="navbar-item flex-column">
    //       <h1 className="subtitle is-4 primary-color" style={{ margin: 0 }}>
    //         CPE CMU
    //       </h1>
    //       <h1 className="subtitle is-4 primary-color">RUAMJAI</h1>
    //     </div>
    //     <div
    //       className={`navbar-burger ${
    //         isOpen ? "is-active" : ""
    //       } burger button is-text`}
    //       onClick={() => setOpen(!isOpen)}
    //     >
    //       <span aria-hidden="true"></span>
    //       <span aria-hidden="true"></span>
    //       <span aria-hidden="true"></span>
    //     </div>
    //   </div>

    //   <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
    //     <div
    //       className="navbar-end flex-row align-items-center"
    //       style={{ flexDirection: "row-reverse" }}
    //     >
    //       <h1 className="has-padding-10 primary-color button is-text">
    //         DASHBOARD
    //       </h1>
    //       <h1
    //         className="has-padding-10 primary-color button is-text"
    //         style={{ fontFamily: "s-medium" }}
    //       >
    //         คำร้องทั้งหมด
    //       </h1>
    //       <h1
    //         className="has-padding-10 primary-color button is-text"
    //         style={{ fontFamily: "s-medium" }}
    //       >
    //         คำร้องของฉัน
    //       </h1>
    //       <IonIcon icon={personCircleOutline} style={{ fontSize: 50 }} />
    //     </div>
    //   </div>
    // </nav>
  );
};
