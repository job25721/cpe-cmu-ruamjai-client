import React from "react";
import { Link } from "react-router-dom";
import { links } from "../route";
import { IonIcon } from "@ionic/react";
import {
  checkmarkOutline,
  closeOutline,
  thumbsDownOutline,
  thumbsUp,
  thumbsUpOutline,
} from "ionicons/icons";
import { useSelector } from "react-redux";
import api from "../api";

const petitionStatus = {
  approved: "อนุมัติ",
  voting: "กำลังโหวต",
  waiting_for_approved: "กำลังรอการนำไปสู่การอนุมัติ",
  waiting_for_voting: "กำลังรอการนำไปสู่การโหวต",
  reject: "ปฏิเสธ",
};

export function Card({ header, detail, voting, status, petitionId }) {
  return (
    <Link to={links.petitionDetail(petitionId)}>
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
                <div
                  className={
                    status === petitionStatus.approved
                      ? "circle bg-green"
                      : status === petitionStatus.voting
                      ? "circle bg-blue"
                      : status === petitionStatus.waiting_for_voting
                      ? "circle bg-yellow"
                      : status === petitionStatus.reject
                      ? "circle bg-red"
                      : ""
                  }
                ></div>
                <span
                  className={
                    status === petitionStatus.approved
                      ? "text-green"
                      : status === petitionStatus.voting
                      ? "text-blue"
                      : status === petitionStatus.waiting_for_voting
                      ? "text-yellow"
                      : status === petitionStatus.reject
                      ? "text-red"
                      : ""
                  }
                >
                  {status}
                </span>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function AbstractCard({ header, detail, voting, status, petitionId }) {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="cus-abstract-card">
      {user.role === "teacher" ? (
        <div className="teacher">
          <div className="cus-btn-check">
            <IonIcon icon={thumbsUpOutline} style={{ fontSize: 20 }} />
          </div>
          <div className="cus-btn-x">
            <IonIcon icon={thumbsDownOutline} style={{ fontSize: 20 }} />
          </div>
        </div>
      ) : user.role === "admin" ? (
        <div className="admin">
          <div className="cus-btn-check" onClick={  () => {
             api.post('/user/approved' , {petitionId : petitionId}).then(
               ()=> window.location.reload()
             ).catch(err=>console.log(err))
          }}>
            <IonIcon icon={checkmarkOutline} style={{ fontSize: 40 }} />
          </div>
          <div className="cus-btn-x" onClick={() => {

          }}>
            <IonIcon icon={closeOutline} style={{ fontSize: 40 }} />
          </div>
        </div>
      ) : null}
      <Link to={links.petitionDetail(petitionId)}>
        <div className="image-abs"></div>
        <div className="content-abs">
          <div className="header-abs">{header}</div>
          <div className="detail-abs">{detail}</div>
        </div>
      </Link>
    </div>
  );
}
