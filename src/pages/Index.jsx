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
          <div className="column is-2">
            <button
              className="button is-text"
              style={{ textDecoration: "none" }}
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
          <div className="column">
            <h1
              className="has-padding-left-30 subtitle is-1"
              style={{ fontFamily: "monserrat-medium" }}
            >
              TRENDING
            </h1>

            <div style={{ overflow: "auto", height: "80vh" }}>
              {[1, 2, 3, 4, 6, 7, 5, 3, 2].map((each) => (
                <Card
                  header="หัวข้อ"
                  detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi ipsa blanditiis, nobis repudiandae iure dignissimos earum culpa nesciunt dolore pariatur dolor accusamus saepe tempore esse nisi consequuntur voluptatum maiores."
                  status="รวบรวมผลโหวต"
                  voting={20}
                  key={each}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
