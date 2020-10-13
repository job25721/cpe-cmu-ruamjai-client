import React, { useEffect } from "react";
import { personCircleOutline } from "ionicons/icons";
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
        <h1>CPE CMU</h1>
        <h1>PETITION LISTENER</h1>
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
        <li>
          <IonIcon icon={personCircleOutline} style={{ fontSize: 50 }} />
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
