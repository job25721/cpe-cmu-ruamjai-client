import React from "react";
import Navbar from "../components/Navbar";

const RequestById = ({ match }) => {
  return (
    <div className="cus-container">
      <div className="nav">
        <Navbar />
      </div>
      {match.params.reqId}
    </div>
  );
};

export default RequestById;
