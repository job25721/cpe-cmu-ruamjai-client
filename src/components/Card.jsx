import React from "react";
import { Link } from "react-router-dom";
import { links } from "../route";
import { IonIcon } from "@ionic/react";
import { checkmarkOutline, closeOutline } from "ionicons/icons";

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

export function AbstractCard({ header, detail, voting, status, petitionId }) {
  return (
    <div className="cus-abstract-card">
      <div className="image-abs">
        <div className="cus-btn-check">
          <IonIcon icon={checkmarkOutline} style={{ fontSize: 40 }} />
        </div>
        <div className="cus-btn-x">
          <IonIcon icon={closeOutline} style={{ fontSize: 40 }} />
        </div>
      </div>
      <div className="content-abs">
        <div className="header-abs">{header}</div>
        <div className="detail-abs">{detail}</div>
      </div>
    </div>
  );
}
