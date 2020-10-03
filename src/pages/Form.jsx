import React from "react";
import Nav from "../components/Navbar";

const Form = () => {
  return (
    <div className="cus-container Set-font-family">
      <div className="nav">
        <Nav className="is-fixed-top" />
      </div>
      <div className="header">
        <div
          className="header-text"
          style={{
            gridColumn: "span 2",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span>New Form</span>
        </div>
      </div>
      <div
        className="container-content"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            gridColumn: "span 2",
            overflow: "auto",
            width: "60%",
            marginTop: 20,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <div className="columns">
            <div className="column is-half">
              <div className="flex-column"></div>
              <h1 className="has-text-left Set-font">ผู้เสนอ</h1>
            </div>
            <div className="column">
              <fieldset disabled>
                <div className="field">
                  <input
                    type="text"
                    className="input has-text-centered"
                    style={{ backgroundColor: "#eccef3" }}
                    placeholder="อาจารย์แดง กีต้าร์"
                  />
                </div>
              </fieldset>
            </div>
          </div>

          <div className="columns">
            <div className="column is-half">
              <div className="flex-column"></div>
              <h1 className="has-text-left Set-font">ประเภทข้อเสนอ</h1>
            </div>
            <div className="column">
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
          </div>

          <div className="columns" style={{ marginTop: -35 }}>
            <div className="column is-half">
              <div className="flex-column"></div>
              <h1 className="has-text-left Set-font">รหัสนักศึกษา</h1>
            </div>
            <div className="column">
              <fieldset disabled>
                <div className="field ">
                  <input
                    type="text"
                    className="input has-text-centered"
                    style={{ backgroundColor: "#eccef3" }}
                    placeholder="600612166"
                  />
                </div>
              </fieldset>
            </div>
          </div>
          <hr />

          <div>
            <h2 className="has-text-left Set-font">เรื่องที่จะเสนอ *</h2>
            <div className="columns">
              <div className="column is-two-fifths">
                <input
                  type="text"
                  className="input"
                  placeholder="พิมพ์หัวเรื่อง..."
                />
              </div>
            </div>
            <textarea
              type="textarea"
              className="input"
              style={{ height: 200, marginBottom: 20 }}
              placeholder="รายละเอียด..."
            />
            <h2 className="has-text-left Set-font">รายละเอียดปลีกย่อย</h2>
            <div className="columns">
              <div className="column is-two-fifths">
                <input
                  type="text"
                  className="input"
                  placeholder="พิมพ์หัวเรื่อง..."
                />
              </div>
            </div>
            <textarea
              type="textarea"
              className="input"
              style={{ height: 200, marginBottom: 20 }}
              placeholder="รายละเอียด..."
            />
            <div className="has-text-right">
              <button className="button">เพิ่มหัวข้อย่อย</button>
            </div>
            <div
              className="has-text-centered"
              style={{
                marginBottom: 20,
              }}
            >
              <button className="button is-success">ส่งแบบฟอร์ม</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
