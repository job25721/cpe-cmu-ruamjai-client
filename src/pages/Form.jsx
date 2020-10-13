import React from "react";
import Nav from "../components/Navbar";
import { IonIcon } from "@ionic/react";
import { checkmark } from "ionicons/icons";
import { addCircleOutline } from "ionicons/icons";

import { connect, useDispatch } from "react-redux";
import { petitionActionTypes } from "../store/reducers/petition";
import {
  onSubDetailTopicChange,
  onSubDetailDescriptionChange,
} from "../store/actions/petition";

import { addNewPetition } from "../store/actions/user";
import { useState } from "react";
import { useEffect } from "react";
import api from "../api";

const mapStateToProps = (state) => ({
  newPetiton: state.petition.newPetiton,
  user: state.user.user,
});

const connector = connect(mapStateToProps, {
  onSubDetailTopicChange,
  onSubDetailDescriptionChange,
  addNewPetition,
});
const Form = ({
  newPetiton,
  onSubDetailTopicChange,
  onSubDetailDescriptionChange,
  user,
  addNewPetition,
}) => {
  const dispatch = useDispatch();
  const [types, setTypes] = useState([]);

  const getAllTypes = async () => {
    let res = await (await api.get("/petitionTypes")).data;
    setTypes(res.data);
  };

  useEffect(() => {
    getAllTypes();
  }, []);
  return (
    <div className="cus-container" style={{ fontFamily: "s-medium" }}>
      <div className="nav">
        <Nav />
      </div>
      <div className="header">
        <div
          className="header-text"
          style={{
            gridColumn: "span 2",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span>New Form</span>
        </div>
      </div>
      <div
        className="container-content"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="has-margin-top-20"
          style={{
            gridColumn: "span 2",
            overflow: "auto",
            width: "60%",

            padding: "0px 30px",
          }}
        >
          <div className="columns">
            <div className="column is-half">
              <div className="flex-column"></div>
              <h1 className="has-text-left" style={{ fontSize: "24px" }}>
                ผู้เสนอ
              </h1>
            </div>
            <div className="column">
              <fieldset disabled>
                <div className="field">
                  <input
                    type="text"
                    className="input has-text-centered"
                    style={{ backgroundColor: "var(--lightPurple)" }}
                    placeholder={`${user.firstName} ${user.lastName}`}
                  />
                </div>
              </fieldset>
            </div>
          </div>

          <div className="columns">
            <div className="column is-half">
              <h1 className="has-text-left" style={{ fontSize: "24px" }}>
                ประเภทข้อเสนอ
              </h1>
            </div>
            <div className="column">
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    onChange={({ target }) => {
                      dispatch({
                        type: petitionActionTypes.setType,
                        payload: target.value,
                      });
                    }}
                    value={newPetiton.type}
                  >
                    {types.map((item, idx) => (
                      <option selected key={idx}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-half">
              <div className="flex-column"></div>
              <h1 className="has-text-left" style={{ fontSize: "24px" }}>
                รหัสนักศึกษา
              </h1>
            </div>
            <div className="column">
              <fieldset disabled>
                <div className="field ">
                  <input
                    type="text"
                    className="input has-text-centered"
                    style={{ backgroundColor: "var(--lightPurple)" }}
                    placeholder={user.code}
                  />
                </div>
              </fieldset>
            </div>
          </div>
          <div className="columns">
            <div className="column is-4">
              <hr />
            </div>
            <div className="column is-4">
              <div
                className="has-text-centered 
              mt-2 
              is-size-5 
              has-text-weight-bold"
              >
                <span>รายละเอียดข้อเสนอ</span>
              </div>
            </div>
            <div className="column is-4">
              <hr />
            </div>
          </div>

          <div>
            <h2 className="has-text-left" style={{ fontSize: "24px" }}>
              เรื่องที่จะเสนอ *
            </h2>
            <div className="columns">
              <div className="column is-two-fifths">
                <input
                  type="text"
                  className="input"
                  placeholder="พิมพ์หัวเรื่อง..."
                  value={newPetiton.detail.topic}
                  onChange={({ target }) =>
                    dispatch({
                      type: petitionActionTypes.setMainTopic,
                      payload: target.value,
                    })
                  }
                />
              </div>
            </div>
            <textarea
              type="textarea"
              className="input"
              style={{ height: 200, marginBottom: 20 }}
              placeholder="รายละเอียด..."
              value={newPetiton.detail.description}
              onChange={({ target }) =>
                dispatch({
                  type: petitionActionTypes.setMainDescription,
                  payload: target.value,
                })
              }
            />
            <h2 className="has-text-left" style={{ fontSize: "24px" }}>
              รายละเอียดปลีกย่อย
            </h2>
            <div style={{ overflow: "auto", maxHeight: 500, width: "100%" }}>
              {newPetiton.subDetail.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="columns">
                      <div className="column">
                        <div className="columns">
                          <div className="column is-1 flex-row justify-center align-items-center">
                            <h1 className="subtitle is-5 has-margin-right-10">
                              {index + 1}.
                            </h1>
                          </div>
                          <div className="column">
                            <input
                              type="text"
                              className="input"
                              placeholder="พิมพ์หัวเรื่อง..."
                              value={item.topic}
                              onChange={({ target }) =>
                                onSubDetailTopicChange(index, target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <textarea
                      type="textarea"
                      className="input"
                      style={{ height: 200, marginBottom: 20 }}
                      placeholder="รายละเอียด..."
                      value={item.description}
                      onChange={({ target }) =>
                        onSubDetailDescriptionChange(index, target.value)
                      }
                    />
                  </div>
                );
              })}
            </div>

            <div className="has-text-right">
              <button
                onClick={() =>
                  dispatch({ type: petitionActionTypes.addSubDetail })
                }
                className="button is-danger bg-red"
              >
                <span className="icon">
                  <IonIcon icon={addCircleOutline} style={{ fontSize: 50 }} />
                </span>
                <span> เพิ่มหัวข้อย่อย</span>
              </button>
            </div>
            <div
              className="has-text-centered"
              style={{
                marginBottom: 20,
              }}
            >
              <button
                onClick={addNewPetition}
                className="button is-success bg-green"
              >
                <span className="icon">
                  <IonIcon icon={checkmark} style={{ fontSize: 50 }} />
                </span>
                <span>ส่งแบบฟอร์ม</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connector(Form);
