import React from "react";
import Navbar from "../components/Navbar";

const Requests = () => {
  const [category] = React.useState(["เรียน", "อาจารย์", "สถานที่", "อื่นๆ"]);
  return (
    <div className="cus-container">
      <Navbar />
      <div className="container" style={{ height: "80vh" }}>
        <div className="columns" style={{ height: "100%" }}>
          <div className="column is-one-third flex-column justify-center">
            <h1
              style={{ color: "var(--deepPurple)" }}
              className="subtitle is-4"
            >
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
        </div>
      </div>
    </div>
  );
};

export default Requests;
