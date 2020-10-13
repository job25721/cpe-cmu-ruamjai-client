import React from "react";

const Auth = () => {
  return (
    <div
      className="container flex-column align-items-center justify-center"
      style={{ height: "100vh" }}
    >
      <div
        className="box"
        style={{ boxShadow: "1px 1px 10px var(--lightPurple)" }}
      >
        <h1 className="subtitle is-3">Login</h1>
        <input
          type="text"
          className="input has-margin-bottom-5"
          placeholder="username"
        />
        <input type="password" className="input" placeholder="password" />
        <div className="buttons has-margin-top-10">
          <button className="button is-success is-light">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
