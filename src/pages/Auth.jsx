import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { login } from "../store/actions/user";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({});

const connector = connect(mapStateToProps, {
  login,
});

const Auth = (props) => {
  const [uname, setUname] = useState("");
  const [pwss, setPwss] = useState("");
  useEffect(() => {
    console.log(uname, pwss);
  });
  return (
    <div
      className="container is-fluid flex-column align-items-center justify-center"
      style={{ height: "100vh", background: "whitesmoke" }}
    >
      <div
        className="box"
        style={{ boxShadow: "1px 1px 10px var(--lightPurple)", maxWidth: 350 }}
      >
        <h1 className="subtitle is-3">Login</h1>
        <input
          type="text"
          className="input has-margin-bottom-5"
          placeholder="username"
          onChange={(e) => setUname(e.target.value)}
          value={uname}
        />
        <input
          type="password"
          className="input"
          placeholder="password"
          onChange={(e) => setPwss(e.target.value)}
          value={pwss}
        />
        <div className="buttons has-margin-top-10">
          <button
            className="button is-success is-light"
            onClick={() => {
              props.login(uname, pwss, props);
            }}
          >
            ล๊อคอิน
          </button>
          <button
            className="button is-primary is-light"
            onClick={() => props.history.push("/")}
          >
            หน้าแรก
          </button>
        </div>
      </div>
    </div>
  );
};

export default connector(Auth);
