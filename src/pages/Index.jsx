import React from "react";
import Nav from "../components/Navbar";
import { Card } from "../components/Card";
import { add } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
const Index = (props) => {
  return (
    <div className="cus-container">
      <Nav />
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <button
              className="button is-text"
              style={{ textDecoration: "none" }}
            >
              <IonIcon icon={add} style={{ fontSize: 30 }} />
              <p
                style={{
                  fontFamily: "s-medium",
                  fontSize: 30,
                  color: "#623688",
                }}
              >
                เพิ่มคำร้อง
              </p>
            </button>
          </div>
          <div className="column">
            <Card header="lorem" detail="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
