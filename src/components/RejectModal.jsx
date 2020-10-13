import React from "react";

const RejectModal = ({ peitionId }) => {
  const [reason, setReason] = React.useState("");
  return (
    <div className="modal reject-modal">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <h1 className="title" style={{ fontFamily: "s-medium" }}>
            เหตุผลการปฏิเสธคำร้องนี้
          </h1>
          <p style={{ color: "var(--red)" }}>*จำเป็น</p>
          <textarea
            className="textarea"
            value={reason}
            onChange={({ target }) => setReason(target.value)}
          />
          {reason}
          <button
            className="button is-danger has-margin-top-10"
            onClick={() => {
              // eslint-disable-next-line no-restricted-globals
              if (reason === "") alert("ต้องกรอกเหตุผลก่อน");
            }}
          >
            ปฏิเสธ
          </button>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => {
          document.querySelector(".reject-modal").classList.remove("is-active");
        }}
      ></button>
    </div>
  );
};

export default RejectModal;
