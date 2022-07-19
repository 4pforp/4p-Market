import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  return ReactDOM.createPortal(children, modalRoot);
};

export default ModalPortal;
