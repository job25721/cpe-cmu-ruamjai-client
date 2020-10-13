import React, { useEffect } from "react";
import { personCircleOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import { links } from "../route";
import {setUser} from '../store/actions/user'
import {connect} from 'react-redux'

const mapStateToProps =  (state) => ({
  user: state.user.user
})

const connector = connect(mapStateToProps,{
})

const Nav = (props) => {
  const [isOpen, setOpen] = React.useState(false);
  useEffect(() => {
    console.log(props.user);
  })
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
        {
          // props.role === "admin" ? (
          //   <li>
          //     <Link to={links.myPetitions}>แอดมิน</Link>
          //   </li>
          // ) : props.role === "teacher"  ? (
          //   <li>
          //     <Link to={links.myPetitions}>แอดมิน</Link>
          //   </li>
          // ) : null
        }
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

export default connector(Nav)