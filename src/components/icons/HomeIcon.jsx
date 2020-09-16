import React from "react";
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

export default HomeIcon;
