import React from "react";
import {AdminNavbar} from "../components/Navbar";
import { AbstractCard } from "../components/Card";
import NewRequestIcon from '../components/icons/NewRequest'
const Admin = () => {
  return (
    <>
      <div className="cus-container">
        <div className="nav">
          <AdminNavbar />
        </div>
        <div className="header-admin">
          <span>NEW REQUESTS</span>
        </div>
        <div className="container-content-admin">
          <div className="rows">
            <div className="cus-column">
              <AbstractCard
                header="HEADER"
                detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus beatae animi, quisquam libero magnam qui illo officiis consequatur ad doloremque consequuntur incidunt non itaque facilis magni totam? Magnam, itaque!"
              />
            </div>
            <div className="cus-column">
              <AbstractCard
                header="HEADER"
                detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus beatae animi, quisquam libero magnam qui illo officiis consequatur ad doloremque consequuntur incidunt non itaque facilis magni totam? Magnam, itaque!"
              />
            </div>
            <div className="cus-column">
              <AbstractCard
                header="HEADER"
                detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus beatae animi, quisquam libero magnam qui illo officiis consequatur ad doloremque consequuntur incidunt non itaque facilis magni totam? Magnam, itaque!"
              />
            </div>
            <div className="cus-column">
              <AbstractCard
                header="HEADER"
                detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus beatae animi, quisquam libero magnam qui illo officiis consequatur ad doloremque consequuntur incidunt non itaque facilis magni totam? Magnam, itaque!"
              />
            </div>
          </div>
          <div className="rows">
            <div className="cus-column">
              <AbstractCard
                header="HEADER"
                detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus beatae animi, quisquam libero magnam qui illo officiis consequatur ad doloremque consequuntur incidunt non itaque facilis magni totam? Magnam, itaque!"
              />
            </div>
            <div className="cus-column">
              <AbstractCard
                header="HEADER"
                detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus beatae animi, quisquam libero magnam qui illo officiis consequatur ad doloremque consequuntur incidunt non itaque facilis magni totam? Magnam, itaque!"
              />
            </div>
            <div className="cus-column">
              <AbstractCard
                header="HEADER"
                detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus beatae animi, quisquam libero magnam qui illo officiis consequatur ad doloremque consequuntur incidunt non itaque facilis magni totam? Magnam, itaque!"
              />
            </div>
            <div className="cus-column">
              <AbstractCard
                header="HEADER"
                detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus beatae animi, quisquam libero magnam qui illo officiis consequatur ad doloremque consequuntur incidunt non itaque facilis magni totam? Magnam, itaque!"
              />
            </div>
          </div>
          <div className="rows">
            <div className="cus-column">
              <AbstractCard
                header="HEADER"
                detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus beatae animi, quisquam libero magnam qui illo officiis consequatur ad doloremque consequuntur incidunt non itaque facilis magni totam? Magnam, itaque!"
              />
            </div>
            <div className="cus-column">
              <AbstractCard
                header="HEADER"
                detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus beatae animi, quisquam libero magnam qui illo officiis consequatur ad doloremque consequuntur incidunt non itaque facilis magni totam? Magnam, itaque!"
              />
            </div>
          </div>
        </div>
        <NewRequestIcon size={60} />
      </div>
    </>
  );
};

export default Admin;
