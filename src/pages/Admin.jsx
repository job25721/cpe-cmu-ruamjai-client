import React from "react";
import Nav from "../components/Navbar";
import { AbstractCard } from "../components/Card";
import NewRequestIcon from '../components/icons/NewRequest'
import { useEffect } from "react";
import { connect } from "react-redux";
import {setCurrentPetition , getMyPetition} from '../store/actions/petition'


const mapStateToProps = (state) => ({
  currentPetition : state.petition.currentPetition
})

const connector = connect(mapStateToProps , {
  setCurrentPetition , getMyPetition
})

const Admin = (props) => {
  const handleSetCurrentPetition = async () => {
    await props.getMyPetition()
  }
  useEffect( () => {
    let res = []
    let col = []
    const temp =[1,2,3,4,5,6,7,8,9,10,12]
    temp.map( (item , index) => {
      if(index % 4 == 3){
        col.push(item)
        res.push(col)
        col = []
      }else{
        col.push(item)
      }
      if(temp.length - 1 === index) {
        res.push(col)
      }
    })
    
  },[])
  return (
    <>
      <div className="cus-container">
        <div className="nav">
          <Nav />
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

export default connector(Admin);
