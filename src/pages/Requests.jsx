import React from "react";
import { Card } from "../components/Card";
import Nav from "../components/Navbar";
import { getVotableAllPetition } from "../store/actions/petition";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  petitions: state.petition.allPetitions,
});

const connector = connect(mapStateToProps, {
  getPetitions: getVotableAllPetition,
});
const Requests = ({ getPetitions, petitions }) => {
  React.useEffect(() => {
    getPetitions();
  }, [getPetitions]);
  const [category] = React.useState(["เรียน", "อาจารย์", "สถานที่", "อื่นๆ"]);
  return (
    <div className="cus-container">
      <div className="nav">
        <Nav />
      </div>
      <div className="header">
        <div className="header-text">ALL PETITION</div>
      </div>
      <div className="container-content">
        <div className="container-menu">
          <h1 style={{ color: "var(--deepPurple)" }} className="subtitle is-4">
            CATEGORY
          </h1>
          <div className="flex-column">
            {category.map((cat, idx) => (
              <label className="checkbox" key={idx}>
                <input type="checkbox" />
                <span
                  style={{ fontFamily: "s-medium" }}
                  className="has-padding-left-10"
                >
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="container-cards">
          {petitions.length > 0 ? (
            petitions.map((each) => (
              <Card
                header={each.detail.topic}
                detail={each.detail.description}
                voting={each.voteNum}
                key={each._id}
                petitionId={each._id}
              />
            ))
          ) : (
            <button className="is-loading button is-large"></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default connector(Requests);