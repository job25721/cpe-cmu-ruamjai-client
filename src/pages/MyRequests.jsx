import React, { useEffect } from "react";
import Nav from "../components/Navbar";
import { Card } from "../components/Card";
import {
  getMyPetition,
  setCurrentPetition,
  Loading,
  Loaded,
  getWaitingPetition,
} from "../store/actions/petition";
import { connect } from "react-redux";
import { useState } from "react";
import Load from "../components/Loading";

const mapStateToProps = (state) => ({
  myPetitions: state.petition.myPetitions,
  isLoading: state.petition.isLoading,
  currentPetition: state.petition.currentPetition,
});

const connector = connect(mapStateToProps, {
  getMyPetition,
  setCurrentPetition,
  Loading,
  Loaded,
});

const Mine = (props) => {
  useEffect(() => {
    handleSetPetition();
  }, []);
  const handleSetPetition = async () => {
    await props.Loading();
    await props.getMyPetition();
    props.Loaded();
  };

  const [status, setStatus] = useState("waiting");
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
                className={
                  status === "approved" ? "approved-focus" : "approved"
                }
                onClick={() => {
                  setStatus("approved");
                  props.setCurrentPetition(props.myPetitions.approved);
                }}
              >
                อนุมัติแล้ว
              </li>
              <li
                className={
                  status === "approving" ? "approving-focus" : "approving"
                }
                onClick={() => {
                  setStatus("approving");
                  props.setCurrentPetition(
                    props.myPetitions.waiting_for_approved
                  );
                }}
              >
                รอการอนุมัติ
              </li>
              <li
                className={status === "voting" ? "voting-focus" : "voting"}
                onClick={() => {
                  setStatus("voting");
                  props.setCurrentPetition(props.myPetitions.voting);
                }}
              >
                รอการโหวต
              </li>
              <li
                className={status === "waiting" ? "waiting-focus" : "waiting"}
                onClick={() => {
                  setStatus("waiting");
                  props.setCurrentPetition(
                    props.myPetitions.waiting_for_voting
                  );
                }}
              >
                รอการยืนยัน
              </li>
              <li
                className={
                  status === "rejected" ? "rejected-focus" : "rejected"
                }
                onClick={() => {
                  setStatus("rejected");
                  props.setCurrentPetition(props.myPetitions.reject);
                }}
              >
                ไม่อนุมัติ
              </li>
            </ul>
          </div>
          <div className="content-area">
            {!props.isLoading ? (
              props.currentPetition !== undefined &&
              props.currentPetition.length !== 0 ? (
                props.currentPetition.map(
                  ({ _id, detail, voteNum, status, rejectReason }) => {
                    return (
                      <Card
                        header={detail.topic}
                        detail={detail.description}
                        voting={voteNum}
                        status={status}
                        key={_id}
                        petitionId={_id}
                        reason={rejectReason}
                      />
                    );
                  }
                )
              ) : (
                <span>ไม่มีอะไรเลย</span>
              )
            ) : (
              <Load />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default connector(Mine);
