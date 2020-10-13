import React from "react";
import { Card } from "../components/Card";
import Nav from "../components/Navbar";
import {
  getVotableAllPetition,
  handleCategoryFilter,
} from "../store/actions/petition";
import { connect } from "react-redux";
import NewRequest from "../components/icons/NewRequest";
import api from "../api";

import Nothing from "../components/Nothing";
const mapStateToProps = (state) => ({
  petitions: state.petition.allPetitions,
  isFilter: state.petition.filter,
  filterdPetitions: state.petition.filterdPetitions,
});

const connector = connect(mapStateToProps, {
  getPetitions: getVotableAllPetition,
  handleCategoryFilter,
});
const Requests = ({
  getPetitions,
  petitions,
  handleCategoryFilter,
  isFilter,
  filterdPetitions,
}) => {
  const [category, setCat] = React.useState([]);
  const getAllTypes = async () => {
    let res = await (await api.get("/petitionTypes")).data;
    const result = res.data.map((item, idx) => {
      return {
        id: idx,
        name: item,
        isChecked: false,
      };
    });
    setCat(result);
  };

  function handleCheckbox({ target }) {
    var arr = category;
    arr[target.value].isChecked = target.checked;
    setCat(arr);
    handleCategoryFilter(category);
  }

  React.useEffect(() => {
    getAllTypes();
  }, []);
  React.useEffect(() => {
    getPetitions();
  }, [getPetitions]);

  return (
    <div className="cus-container">
      <NewRequest />
      <div className="nav">
        <Nav />
      </div>
      <div className="header">
        <div className="header-text">คำร้องทั้งหมด</div>
      </div>
      <div className="container-content">
        <div className="container-menu">
          <div className="menu-header">
            <h1
              style={{ color: "var(--deepPurple)" }}
              className="subtitle is-4"
            >
              หมวดหมู่
            </h1>
          </div>

          <div className="menu-content">
            {category.map((cat) => (
              <div style={{ display: "flex" }}>
                <label className="checkbox" key={cat.id}>
                  <input
                    value={cat.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                  />
                  <span
                    style={{ fontFamily: "s-medium" }}
                    className="has-padding-left-10"
                  >
                    {cat.name}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="container-cards">
          {petitions.length > 0 ? (
            !isFilter ? (
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
              filterdPetitions.map((each) => (
                <Card
                  header={each.detail.topic}
                  detail={each.detail.description}
                  voting={each.voteNum}
                  key={each._id}
                  petitionId={each._id}
                />
              ))
            )
          ) : (
            // <button className="is-loading button is-large"></button>
            <Nothing />
          )}
        </div>
      </div>
    </div>
  );
};

export default connector(Requests);
