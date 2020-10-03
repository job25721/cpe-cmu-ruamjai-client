import React from "react";
import Nav from "../components/Navbar";

const Form = () => {
  return (
    <div className="cus-container">
      <div className="nav">
        <Nav className="is-fixed-top" />
      </div>
      <div className="has-text-centered">
        <h2 className="Set-color-head" style={{ marginBottom: 50 }}>
          New Form
        </h2>
        <div>
          <div className="columns">
            <div className="column is-3"></div>
            <div className="column is-3">
              <div className="flex-column"></div>
              <h1 className="has-text-left Set-font">ผู้เสนอ</h1>
            </div>
            <div className="column is-3">
              <fieldset disabled>
                <div className="field">
                  <input
                    type="text"
                    className="input"
                    style={{ backgroundColor: "#eccef3" }}
                  />
                </div>
              </fieldset>
            </div>
            <div className="column is-3"></div>
          </div>

          <div className="columns">
            <div className="column is-3"></div>
            <div className="column is-3">
              <div className="flex-column"></div>
              <h1 className="has-text-left Set-font">ประเภทข้อเสนอ</h1>
            </div>
            <div className="column is-3">
              <div className="control">
                <div className="select is-fullwidth">
                  <select>
                    <option selected>ทั่วไป</option>
                    <option>สวัสดีค๊าบบ ท่านผู้เจริญ</option>
                    <option>ขอแบบเบิ้มๆ คือลือๆน่ะ</option>
                  </select>
                </div>
                <span class="icon is-small is-left">
                  <i class="fas fa-globe"></i>
                </span>
              </div>
            </div>
            <div className="column is-3"></div>
          </div>

          <div className="columns" style={{ marginTop: -35 }}>
            <div className="column is-3"></div>
            <div className="column is-3">
              <div className="flex-column"></div>
              <h1 className="has-text-left Set-font">รหัสนักศึกษา</h1>
            </div>
            <div className="column is-3">
              <fieldset disabled>
                <div className="field">
                  <input
                    type="text"
                    className="input has-text-centered"
                    style={{ backgroundColor: "#eccef3" }}
                    placeholder="600612166"
                  />
                </div>
              </fieldset>
            </div>
            <div className="column is-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
