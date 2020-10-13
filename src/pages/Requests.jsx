import React from "react";
import { Card } from "../components/Card";
import Nav from "../components/Navbar";

const Requests = () => {
  const [category] = React.useState(["เรียน", "อาจารย์", "สถานที่", "อื่นๆ"]);
  return (
    <div className="cus-container">
      <div className="nav">
        <Nav />
      </div>
      <div className="header">
        <div className="header-text">ALL PETITION</div>
      </div>
      <div className="container-content">
        <div className="container-menu">
          <h1 style={{ color: "var(--deepPurple)" }} className="subtitle is-4">
            CATEGORY
          </h1>
          <div className="flex-column">
            {category.map((cat, idx) => (
              <label class="checkbox" key={idx}>
                <input type="checkbox" />
                <span
                  style={{ fontFamily: "s-medium" }}
                  className="has-padding-left-10"
                >
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="container-cards">
          {[1, 2, 3, 4, 6, 7, 5, 3, 2].map((each) => (
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

export default Requests;
