import React, { useEffect } from "react";
import Nav from "../components/Navbar";
import { Card } from "../components/Card";
import { getMyPetition } from "../store/actions/petition";
import { connect } from "react-redux";
import { useState } from "react";

const mapStateToProps = (state) => ({
  myPetitions: state.petition.myPetitions,
});

const connector = connect(mapStateToProps, {
  getMyPetition,
});

const Mine = (props) => {
  const uid = "5f75b413d6e2bd4e19136a90";
  useEffect(() => {
    props.getMyPetition(uid);
  }, []);

  useEffect(() => {
    setPetition(props.myPetitions.waiting_for_voting);
    console.log(petition);
  }, []);
  
  const [status, setStatus] = useState("waiting");
  const [petition, setPetition] = useState([]);

  return (
    <>
      <div className="cus-container">
        <div className="nav">
          <Nav />
        </div>
        <div className="header-mine">
          <span>คำร้องของฉัน</span>
        </div>
        <div className="container-content-mine">
          <div className="tab-bar">
            <ul className="tab-link">
              <li
                className={status === 'approved' ? "approved-focus" : 'approved' }
                onClick={() => {
                  setStatus("approved");
                  setPetition(props.myPetitions.approved);
                }}
              >
                อนุมัติแล้ว
              </li>
              <li
                className={status === 'approving' ? "approving-focus" : 'approving' }
                onClick={() => {
                  setStatus("approving");
                  setPetition(props.myPetitions.waiting_for_approved);
                }}
              >
                รอการอนุมัติ
              </li>
              <li
                className={status === 'voting' ? "voting-focus" : 'voting' }
                onClick={() => {
                  setStatus("voting");
                  setPetition(props.myPetitions.voting);
                }}
              >
                รอการโหวต
              </li>
              <li
                className={status === 'waiting' ? "waiting-focus" : 'waiting' }
                onClick={() => {
                  setStatus("waiting");
                  setPetition(props.myPetitions.waiting_for_voting);
                }}
              >
                รอการยืนยัน
              </li>
              <li
                className={status === 'rejected' ? "rejected-focus" : 'rejected' }
                onClick={() => {
                  setStatus("rejected");
                  setPetition(props.myPetitions.reject);
                  console.log(petition);
                }}
              >
                ไม่อนุมัติ
              </li>
            </ul>
          </div>
          <div className="content-area">
            {petition !== undefined && petition.length !== 0 ? (
              petition.map(({ _id, detail, voteNum, status }) => {
                return (
                  <Card
                    header={detail.topic}
                    detail={detail.description}
                    voting={voteNum}
                    status={status}
                    key={_id}
                    petitionId={_id}
                  />
                );
              })
            ) : (
              <span> ไม่มีอะไรเลย </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default connector(Mine);
