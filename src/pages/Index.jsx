import React from "react";
import Nav from "../components/Navbar";
import Test from "../components/Test";
const Index = (props) => {
  return (
    <div className="cus-container">
      <Nav />
      <div className="container">
        <h1 className="subtitle is-4">Index Page</h1>
        <Test />
        <button
          className="button is-primary"
          onClick={() => props.history.push("/app")}
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default Index;
