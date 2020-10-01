import React from "react";
import Nav from "../components/Navbar";

export function Card({ header, detail, voting, status }) {
  return (
    <div className="cus-card">
      <div className="image">
        <div className="voting">
          <span>{voting}</span>
        </div>
      </div>
      <div className="v-line"></div>
      <div className="content">
        <div className="content-row">
          <div className="header">
            <p>{header}</p>
          </div>
          <div className="detail">
            <span>{detail}</span>
          </div>
          {status ? (
            <div className="status">
              <div className="circle"></div>
              <span>{status}</span>
            </div>
          ) : (
            <div />
          )}
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
