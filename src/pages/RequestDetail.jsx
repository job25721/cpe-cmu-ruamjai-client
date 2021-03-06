import React from "react";
import Navbar from "../components/Navbar";
import { getDetail } from "../store/actions/petition";
import { useEffect } from "react";
import { useState } from "react";
import NewRequest from "../components/icons/NewRequest";
// import { IonIcon } from "@ionic/react";
// import { checkmarkOutline, closeOutline } from "ionicons/icons";
import { connect } from "react-redux";
import { votePetition } from "../store/actions/user";

const mapStateToProps = (state) => ({
  user: state.user.user,
});
const connector = connect(mapStateToProps, { votePetition });
const RequestById = (props) => {
  const [isLoading, setLoading] = useState(false);
  const handleSetData = async () => {
    const temp = await getDetail(props.match.params.petitionId);
    console.log(temp);
    await setData(temp);
    setLoading(true);
  };
  useEffect(() => {
    handleSetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [data, setData] = useState({});
  return (
    <>
      <NewRequest />
      <div className="cus-container">
        <div className="nav">
          <Navbar />
        </div>
        {isLoading ? (
          <>
            <div className="detail-header">
              <div className="detail-header-voting">
                จำนวนผลโหวต {data.voteNum}
              </div>
              <div className="detail-header-name">{data.detail.topic}</div>
              <div className="detail-header-type">
                ประเภทข้อเสนอ : {data.type}
              </div>
            </div>
            <div className="container-content">
              <div className="detail-menu-container">
                <div className="detail-personal-info">
                  <div
                    className="box"
                    style={{
                      backgroundColor: "var(--lightPurple)",
                      width: "100%",
                      height: "auto",
                      maxHeight: "300px",
                      minHeight: "250px",
                    }}
                  ></div>
                  <p>
                    {data.owner.firstName} {data.owner.lastName}
                  </p>
                  <p>{data.owner.code}</p>
                </div>
                <div className="detail-vote-button">
                  {props.user.votedPetitions !== undefined ? (
                    props.user.votedPetitions.find(
                      (item) => item === props.match.params.petitionId
                    ) !== undefined ? (
                      data.canVote === true ? (
                        <button
                          className="button-agree"
                          style={{ cursor: "pointer" }}
                          disabled
                        >
                          VOTED
                        </button>
                      ) : null
                    ) : data.canVote === true ? (
                      <button
                        className="button-agree"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          e.currentTarget.disabled = true;
                          e.currentTarget.classList.add("disabled");
                          e.currentTarget.textContent = "VOTED";
                          props.votePetition(props.match.params.petitionId);
                        }}
                      >
                        VOTE
                      </button>
                    ) : null
                  ) : null}
                  {/* {props.user.votedPetitoins !== undefined ?  props.user.votedPetitoins.find(
                  (item) => item === props.props.match.params.petitionId
                ) !== undefined ? "Voted" : "not"} */}
                </div>
              </div>
              <div
                className="container-cards "
                style={{ lineHeight: 2, padding: 30 }}
              >
                <div
                  style={{
                    marginBottom: 15,
                  }}
                >
                  <span>{data.detail.description}</span>
                </div>
                {data.sub_detail !== undefined && data.sub_detail.length !== 0
                  ? data.sub_detail.map((ct, idx) => (
                      <div
                        className="sub-content"
                        style={{ paddingLeft: 15 }}
                        key={idx}
                      >
                        <div
                          style={{
                            fontSize: "1rem",
                            color: "#623688",
                            marginTop: 15,
                          }}
                        >
                          {ct.topic}
                        </div>
                        {ct.description}
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "s-reg",
                alignItems: "center",
                height: "100vh",
                fontSize: 50,
                color: "#623688",
              }}
            >
              <img src="/plane.gif" alt="" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default connector(RequestById);
