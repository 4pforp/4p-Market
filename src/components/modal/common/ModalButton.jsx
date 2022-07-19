import React from "react";

function ModalButton({ handleClick, children }) {
  return (
    <>
      <li>
        <button type="button" onClick={handleClick}>
          {children}
        </button>
      </li>
    </>
  );
}

export default ModalButton;
