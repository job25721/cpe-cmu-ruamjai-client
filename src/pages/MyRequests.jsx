import React from "react";
import Nav from "../components/Navbar";
import { Card } from "../components/Card";
const Mine = () => {
  return (
    <>
      <div className="cus-container">
        <div className="nav">
          <Nav />
        </div>
        <div className="header-mine">
          <span>MY REQUESTS</span>
        </div>
        <div className="container-content-mine">
          <div className="tab-bar">
            <ul className="tab-link">
              <li className="approved">APPROVED</li>
              <li className="voting">VOTING</li>
              <li className="waiting">WAITING</li>
              <li className="rejected">REJECTED</li>
            </ul>
          </div>
          <div className="content-area">
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
    </>
  );
};

export default Mine;
