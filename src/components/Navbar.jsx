import React, { useEffect } from "react";
import {
  logInOutline,
  logOutOutline,
  personCircleOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import { links } from "../route";
import { connect, useDispatch } from "react-redux";
import api from "../api";
import { userType } from "../store/reducers/user";

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const connector = connect(mapStateToProps, {});

const Nav = (props) => {
  const [isOpen, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getPersonal() {
    try {
      let res = await api.get("/user/my");
      dispatch({ type: userType.SET_USER, payload: res.data.data.data });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getPersonal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <nav className="cus-navbar">
      <div className="brand">
        <p style={{ fontSize: 30 }}>CPE CMU</p>
        <p style={{ fontSize: 14 }}>PETITION LISTENER</p>
      </div>

      <ul
        className={isOpen ? "nav-link open" : "nav-link"}
        style={{ fontFamily: "s-medium" }}
      >
        <li>
          <Link to={links.index}>หน้าแรก</Link>
        </li>

        <li>
          <Link to={links.allPetition}>คำร้องทั้งหมด</Link>
        </li>

        <li>
          <Link to={links.myPetitions}>คำร้องของฉัน</Link>
        </li>
        {props.user.role === "admin" ? (
          <li>
            <Link to={links.admin}>แอดมิน</Link>
          </li>
        ) : props.user.role === "teacher" ? (
          <li>
            <Link to={links.admin}>อาจารย์</Link>
          </li>
        ) : null}

        <li className="nav-info">
          <div className="icons">
            <IonIcon
              icon={personCircleOutline}
              style={{ fontSize: 50, marginLeft: 25 }}
            />
            {localStorage.getItem("token") ? (
              <IonIcon
                icon={logOutOutline}
                style={{ fontSize: 30, color: "var(--red)", cursor: "pointer" }}
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/";
                }}
              />
            ) : (
              <IonIcon
                icon={logInOutline}
                style={{
                  fontSize: 30,
                  color: "var(--green)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.location.href = "/login/auth";
                }}
              />
            )}
          </div>

          {props.user.firstName !== undefined &&
          props.user.lastName !== undefined ? (
            <span>
              {props.user.firstName} {props.user.lastName}
            </span>
          ) : null}
        </li>
      </ul>

      <div
        className="hamburger"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    </nav>
  );
};

export default connector(Nav);
