import ModalPortal from "../../modalBase/ModalPortal";
import "../Alert.scss";

function AlertFrame({ children, text }) {
  return (
    <>
      <ModalPortal>
        <article className="container-alert">
          <h2 className="a11y-hidden">alert</h2>
          <div className="wrapper-alert">
            <strong className="text-alert">{text}</strong>
            <ul className="list-alert">{children}</ul>
          </div>
        </article>
      </ModalPortal>
    </>
  );
}

export default AlertFrame;
