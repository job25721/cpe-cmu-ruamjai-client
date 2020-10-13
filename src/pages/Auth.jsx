import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { login } from "../store/actions/user";
import { connect } from "react-redux";
import { IonIcon } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";

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
    <>
    <div className="backButton"
     onClick={ () => {
       props.history.push('/')
     }}
    >
      <IonIcon icon={chevronBackOutline} style={{fontSize : 40}} />
      <span style={{fontSize:20}}>กลับหน้าหลัก</span>
    </div>
    <div
      className="container is-fluid flex-column align-items-center justify-center"
      style={{ height: "100vh", background: "whitesmoke" }}
    >
      <div
        className="box"
        style={{maxWidth: 350 ,display:'flex' , alignItems:'center' , justifyContent:"center" , flexDirection:'column'}}
      >
        <h1 className="subtitle is-3 text-deepPurple" style={{fontFamily:'m-med'}}>SIGN IN</h1>
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
            className="button bg-deepPurple color-lightPurple"
            style={{color:'#fff'}}
            onClick={() => {
              props.login(uname, pwss, props);
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default connector(Auth);
