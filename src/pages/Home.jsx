import React from "react";
import { IonIcon } from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";

const Home = () => {
  return (
    <div className="">
      <div>
        <div className="columns">
          <div
            className="column is-half"
            style={{ marginTop: 100, paddingLeft: 150 }}
          >
            <div class="hero is-medium">
              <div class="hero-body">
                <div class="container">
                  <h1 class="Set-color-head">CPE CMU RUAMJAI</h1>
                  <h2 class="Set-color-sub" style={{ margin: 0 }}>
                    ระบบรับเสนอเรื่องทั่วไปของ
                  </h2>
                  <h2 class="Set-color-sub">
                    ภาควิชาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่
                  </h2>
                  <div style={{ marginTop: 15 }}>
                    <button className="button" style={{backgroundColor: "#ECCEF3"}}>
                      <span className="icon">
                        <IonIcon
                          icon={personCircleOutline}
                          style={{ fontSize: 50 }}
                        />
                      </span>
                      <span className="Set-Button-submit">
                        Sign in with CMU Account
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div class="hero is-medium Home-Color">
              <div class="hero-body">
                <div class="container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
