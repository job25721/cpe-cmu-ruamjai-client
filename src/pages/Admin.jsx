import React from "react";
import Nav from "../components/Navbar";
import { AbstractCard } from "../components/Card";
import NewRequestIcon from "../components/icons/NewRequest";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  setCurrentPetition,
  getWaitingPetition,
  Loading,
  Loaded,
} from "../store/actions/petition";
import Load from "../components/Loading";
import { useState } from "react";

const mapStateToProps = (state) => ({
  adminPetition: state.petition.adminPetition,
  isLoading: state.petition.isLoading,
});

const connector = connect(mapStateToProps, {
  setCurrentPetition,
  getWaitingPetition,
  Loading,
  Loaded,
});

const List = ({ requests }) => {
  useEffect(() => {
    console.log(requests);
  });
  return (
    <>
      <div className="rows">
        {requests.length !== 0 ? (
          requests.map((item) => {
            return (
              <div className="cus-column" key={item._id} id={item._id}>
                <AbstractCard
                  header={item.detail.topic}
                  detail={item.detail.description}
                  petitionId={item._id}
                />
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

const Admin = (props) => {
  useEffect(() => {
    handleSetCurrentPetition();
  }, []);
  const handleSetCurrentPetition = async () => {
    await props.Loading();
    await props.getWaitingPetition();
    props.Loaded();
  };
  function split(arr) {
    var result = [];
    var temp = [];
    arr.map((item, index) => {
      temp.push(item);
      if (index % 4 === 3) {
        result.push(temp);
        temp = [];
      } else if (arr.length - 1 === index) {
        result.push(temp);
      }
    });
    return result;
  }
  return (
    <>
      <div className="cus-container">
        <div className="nav">
          <Nav />
        </div>
        <div className="header-admin">
          <span>คำร้องใหม่</span>
        </div>
        <div className="container-content-admin">
          {!props.isLoading ? (
            props.adminPetition !== undefined &&
            props.adminPetition.length !== 0 ? (
              split(props.adminPetition).map((item, index) => {
                console.log(item);
                return <List requests={item} key={index} />;
              })
            ) : (
              <></>
            )
          ) : (
            <Load />
          )}
        </div>

        <NewRequestIcon size={60} />
      </div>
    </>
  );
};

export default connector(Admin);
