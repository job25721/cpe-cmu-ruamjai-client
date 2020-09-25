import React, { useEffect } from "react";

export function Card(props) {
  useEffect(() => {
    
  },[]);
  return (
    <div className="cus-card">
      <div className="image"></div>
      <div className="v-line"></div>
      <div className="content">
        <div className="content-row">
          <div className="header">
            <p>{props.header}</p>
          </div>
          <div className="detail">
            <span>{props.detail}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
