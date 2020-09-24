import React from "react";
import { personCircleOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
export default () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <nav className="navbar has-margin-top-20 has-margin-bottom-20">
      <div className="navbar-brand">
        <div className="navbar-item flex-column">
          <h1 className="subtitle is-4 primary-color" style={{ margin: 0 }}>
            CPE CMU
          </h1>
          <h1 className="subtitle is-4 primary-color">RUAMJAI</h1>
        </div>
        <div
          className={`navbar-burger ${
            isOpen ? "is-active" : ""
          } burger button is-text`}
          onClick={() => setOpen(!isOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
        <div
          className="navbar-end flex-row align-items-center"
          style={{ flexDirection: "row-reverse" }}
        >
          <h1 className="has-padding-10 primary-color button is-text">
            DASHBOARD
          </h1>
          <h1
            className="has-padding-10 primary-color button is-text"
            style={{ fontFamily: "s-medium" }}
          >
            คำร้องทั้งหมด
          </h1>
          <h1
            className="has-padding-10 primary-color button is-text"
            style={{ fontFamily: "s-medium" }}
          >
            คำร้องของฉัน
          </h1>
          <IonIcon icon={personCircleOutline} style={{ fontSize: 50 }} />
        </div>
      </div>
    </nav>
  );
};