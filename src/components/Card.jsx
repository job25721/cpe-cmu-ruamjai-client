import React from "react";
import { Link } from "react-router-dom";
import { links } from "../route";

export function Card({ header, detail, voting, status, petitionId }) {
  return (
    <div className="cus-card">
      <div className="image">
        <div className="voting">
          <span>{voting}</span>
        </div>
      </div>

      <div className="v-line"></div>

      <div className="content">
        <Link to={links.petitionDetail(petitionId)}>
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
        </Link>
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
