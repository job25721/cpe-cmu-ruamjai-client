import React from "react";
import Nav from "../components/Navbar";
// import { Card } from "../components/Card";

import { add } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { links } from "../route";

const Index = (props) => {
  return (
    <div className="cus-container">
      <div className="nav">
        <Nav />
      </div>
      <div className="header">
        <div className="header-text">TRENDING</div>
      </div>
      <div className="container-content">
        <div className="container-menu">
          <button
            className="button is-text"
            style={{ textDecoration: "none" }}
            onClick={() => props.history.push(links.addPetition)}
          >
            <IonIcon icon={add} style={{ fontSize: 30 }} />
            <p
              style={{
                fontFamily: "s-medium",
                fontSize: 30,
                color: "var(--deepPurple)",
              }}
            >
              เพิ่มคำร้อง
            </p>
          </button>
        </div>

        <div className="container-cards">
          <button className="button is-loading is-large is-danger"></button>
        </div>
      </div>
    </div>
  );
};

export default Index;
