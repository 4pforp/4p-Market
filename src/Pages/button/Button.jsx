import React, { useState } from "react";
import "./button.scss";

function Button({ children, email, password, type, isActive, view, setView }) {
  function handleView() {
    setView(true);
  }
  return (
    <button
      type={type}
      formtarget="#none"
      className={`btn-signup ${isActive}`}
      disabled={isActive}
      onClick={handleView}
    >
      {children}
    </button>
  );
}

export default Button;
