import React from "react";
import Nav from "../components/Navbar";
// import { Card } from "../components/Card";

import { add } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { links } from "../route";
import NewRequest from "../components/icons/NewRequest";

import { Card } from "../components/Card";
import Loading from "../components/Loading";
import { connect } from "react-redux";
import { getTrendingPetiton } from "../store/actions/petition";
import { useEffect } from "react";
import Nothing from '../components/Nothing'
const mapStateToProps = (state) => ({
  trendingPetitions: state.petition.allPetitions,
});

const connector = connect(mapStateToProps, { getTrendingPetiton });
const Index = (props) => {
  useEffect(() => {
    props.getTrendingPetiton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <NewRequest />
      <div className="cus-container">
        <div className="nav">
          <Nav />
        </div>
        <div className="header">
          <div className="header-text">กำลังมาแรง</div>
        </div>
        <div className="container-content">
          <div className="container-menu">
            <button
              className="button is-text"
              style={{ textDecoration: "none" }}
              onClick={() => props.history.push(links.addPetition)}
            >
              <IonIcon icon={add} style={{ fontSize: 30 }} />
              <p
                style={{
                  fontFamily: "s-medium",
                  fontSize: 30,
                  color: "var(--deepPurple)",
                }}
              >
                เพิ่มคำร้อง
              </p>
            </button>
          </div>

          <div className="container-cards">
            {props.trendingPetitions !== undefined ? (
              props.trendingPetitions.length === 0 ? (
                <Nothing />
              ) :(
              props.trendingPetitions.map((each) => (
                <Card
                  header={each.detail.topic}
                  detail={each.detail.description}
                  voting={each.voteNum}
                  key={each._id}
                  petitionId={each._id}
                />
              )))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default connector(Index);
