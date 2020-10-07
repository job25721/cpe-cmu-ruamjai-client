import React from "react";
import Nav from "../components/Navbar";
import { Card } from "../components/Card";
import { add } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

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
          <button className="button is-text" style={{ textDecoration: "none" }}>
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
          {[121, 211, 32, 45, 64, 27, 222, 34, 21].map((each) => (
            <Card
              header="หัวข้อ"
              detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi ipsa blanditiis, nobis repudiandae iure dignissimos earum culpa nesciunt dolore pariatur dolor accusamus saepe tempore esse nisi consequuntur voluptatum maiores."
              status="รวบรวมผลโหวต"
              voting={20}
              key={each}
              petitionId={each}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
