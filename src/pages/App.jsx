import React from "react";

import { AbstractCard } from "../components/Card";

const App = (props) => {
  return (
    <>
      {/* <Nav /> */}
      <AbstractCard
        header="หัวข้อ"
        detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias ratione corporis eum enim porro fugit et ad, incidunt possimus unde provident itaque beatae similique pariatur, distinctio veniam error quisquam"
      />
      <button
        onClick={() =>
          document.querySelector(".reject-modal").classList.add("is-active")
        }
      >
        Open
      </button>
      {/* <RejectModal isOpen={openModal} /> */}
      {/* <Card
        header="หัวข้อ"
        detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias ratione corporis eum enim porro fugit et ad, incidunt possimus unde provident itaque beatae similique pariatur, distinctio veniam error quisquam?"
        // status="รอการอนุมัติ"
        voting="100"
      />
      <Card
        header="หัวข้อ"
        detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias ratione corporis eum enim porro fugit et ad, incidunt possimus unde provident itaque beatae similique pariatur, distinctio veniam error quisquam?"
        // status="รอการอนุมัติ"
        voting="50"
      /> */}
    </>
  );
};

export default App;
