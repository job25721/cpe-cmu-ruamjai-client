import React from "react";
import { Card } from "../components/Card";

const App = (props) => {
  return (
    <>
      <Card
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
      />
    </>
  );
};

export default App;
