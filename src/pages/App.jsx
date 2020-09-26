import { repeat } from "ionicons/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Card, AbstractCard } from "../components/Card";
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
      <Card 
        header="หัวข้อ"
        detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias ratione corporis eum enim porro fugit et ad, incidunt possimus unde provident itaque beatae similique pariatur, distinctio veniam error quisquam?"
        status="รอการอนุมัติ"
        voting="100"
      />
    </>
  );
};

export default App;
