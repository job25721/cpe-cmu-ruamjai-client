import React from "react";
import { useSelector } from "react-redux";
import { home, homeOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
const HomeIcon = ({ size }) => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
      style={{ cursor: "pointer" }}
    >
      {!toggle ? (
        <IonIcon icon={homeOutline} style={{ fontSize: size }} />
      ) : (
        <IonIcon icon={home} style={{ fontSize: size }} color="primary" />
      )}
    </div>
  );
};
const App = (props) => {
  const counter = useSelector((state) => state.counter.counter);
  return (
    <>
      <h1 className="title is-1">Typograhpy title</h1>
      <h2 className="subtitle is-2">Typography subtitle</h2>
      <h2 className="subtitle is-2 has-padding-35">
        Typography subtitle with padding 10px
      </h2>

      <h1 className="subtitle is-3 has-padding-10">
        current counter (redux): {counter}
      </h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <HomeIcon size={50} />
        <p style={{ fontSize: "25px" }}>Home</p>
      </div>
      <p
        style={{
          fontFamily: "mitr-regular",
          fontSize: 50,
        }}
      >
        เพิ่มคำร้อง
      </p>
      <input className="input" />
      <button
        className="button is-primary"
        onClick={() => props.history.push("/")}
      >
        Click
      </button>
    </>
  );
};

export default App;
