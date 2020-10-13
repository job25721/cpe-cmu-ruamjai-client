import React from "react";
import { IonIcon } from "@ionic/react";
import { createOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { links } from "../../route";
const NewRequest = ({ size }) => {
  return (
    <Link to={links.addPetition}>
      <div className="add-new-request-icon">
        <IonIcon icon={createOutline} style={{ fontSize: 50 }} />
      </div>
    </Link>
  );
};

export default NewRequest;
