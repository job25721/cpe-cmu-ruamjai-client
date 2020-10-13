import React from "react";
import { IonIcon } from "@ionic/react";
import { createOutline } from "ionicons/icons";
const NewRequest = ({ size }) => {
  return (
    <div className="add-new-request-icon">
        <IonIcon icon={createOutline} style={{fontSize : size }} />
    </div>
  );
};

export default NewRequest;
