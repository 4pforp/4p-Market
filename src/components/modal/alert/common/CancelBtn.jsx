import { useState } from "react";

function CancelBtn({ handleCloseAlert }) {
  const [onAlert, setOnAlert] = useState(false);
  function handleCloseAlert() {
    setOnAlert(false);
  }
  return (
    <li>
      <button type="button" onClick={handleCloseAlert}>
        취소
      </button>
    </li>
  );
}

export default CancelBtn;
