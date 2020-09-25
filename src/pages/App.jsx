import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../components/Card";
import HomeIcon from "../components/icons/HomeIcon";

const App = (props) => {
  const counter = useSelector((state) => state.counter.counter);
  return (
    // <>
    //   <h1 className="title is-1">Typograhpy title</h1>
    //   <h2 className="subtitle is-2">Typography subtitle</h2>
    //   <h2 className="subtitle is-2 has-padding-35">
    //     Typography subtitle with padding 10px
    //   </h2>

    //   <h1 className="subtitle is-3 has-padding-10">
    //     current counter (redux): {counter}
    //   </h1>
    //   <div style={{ display: "flex", alignItems: "center" }}>
    //     <HomeIcon size={50} />
    //     <p style={{ fontSize: "25px" }}>Home</p>
    //   </div>
    //   <p
    //     style={{
    //       fontFamily: "s-light",
    //       fontSize: 50,
    //     }}
    //   >
    //     เพิ่มคำร้อง
    //   </p>
    //   <input className="input" />
    //   <button
    //     className="button is-primary"
    //     onClick={() => props.history.push("/")}
    //   >
    //     Click
    //   </button>
    // </>
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          textAlign: "start",
          height: "100vh",
          paddingLeft: "10%",
          paddingRight: "10%",
          backgroundColor: "#ff9",
        }}
      >
        <div
          style={{
            width: "70%",
          }}
        >
          <Card
            header="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum temporibus voluptatem consequuntur est, quis facere, animi sunt maiores expedita aspernatur, qui placeat exercitationem adipisci saepe deleniti recusandae? Nam, eaque repudiandae."
            detail=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum temporibus voluptatem consequuntur est, quis facere, animi sunt maiores expedita aspernatur, qui placeat exercitationem adipisci saepe deleniti recusandae? Nam, eaque repudiandae."
          />
        </div>
      </div>
    </>
  );
};

export default App;
