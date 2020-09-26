import React, { useEffect } from "react";

export function Card(props) {
  return (
    <div className="cus-card">
      <div className="image">
        <div className="voting">
          {/* <ion-icon name="thumbs-up-outline"></ion-icon> */}
          <span>{props.voting}</span>
        </div>
      </div>
      <div className="v-line"></div>
      <div className="content">
        <div className="content-row">
          <div className="header">
            <p>{props.header}</p>
          </div>
          <div className="detail">
            <span>{props.detail}</span>
          </div>
          <div className="status">
            <div className="circle"></div>
            <span>{props.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AbstractCard(props) {
  return (
    <div className="cus-abstract-card">
      <div className="image"></div>
      <div className="content">
        <div className="header">{props.header}</div>
        <div className="detail">{props.detail}</div>
      </div>
    </div>
  );
}
