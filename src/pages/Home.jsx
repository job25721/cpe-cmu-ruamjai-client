import React from "react";
import { IonIcon } from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";

const Home = () => {
  return (
    <div className="columns" style={{ fontFamily: "s-medium" }}>
      <div
        className="column is-half"
        style={{ marginTop: 100, paddingLeft: 150 }}
      >
        <div class="hero is-medium">
          <div class="hero-body">
            <div class="container">
              <h1
                style={{
                  color: "var(--deepPurple)",
                  fontSize: 48,
                  fontWeight: "bold",
                  fontFamily: "s-bold",
                }}
              >
                CPE CMU RUAMJAI
              </h1>
              <div
                style={{
                  color: "var(--grey)",
                  fontSize: 22,
                }}
              >
                <h2 style={{ margin: 0 }}>ระบบรับเสนอเรื่องทั่วไปของ</h2>
                <h2>ภาควิชาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่</h2>
              </div>

              <div style={{ marginTop: 15 }}>
                <button
                  className="button"
                  style={{ backgroundColor: "var(--lightPurple)" }}
                >
                  <span className="icon">
                    <IonIcon
                      icon={personCircleOutline}
                      style={{ fontSize: 50, color: "var(--deepPurple)" }}
                    />
                  </span>
                  <span
                    style={{
                      color: "var(--deepPurple)",
                      fontWeight: "bold",
                    }}
                  >
                    Sign in with CMU Account
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div
          class="hero is-medium"
          style={{ backgroundColor: "var(--lightPurple)", height: "100vh" }}
        >
          <div class="hero-body">
            <div class="container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
