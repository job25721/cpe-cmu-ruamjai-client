import React from "react";

export default ({ msg }) => {
  return (
    <div className="modal msg-modal">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <p style={{ fontFamily: "s-medium" }}>{msg}</p>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => {
          document.querySelector(".msg-modal").classList.remove("is-active");
          window.location.reload();
        }}
      ></button>
    </div>
  );
};
