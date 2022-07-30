import ModalPortal from "./ModalPortal";
import "./Alert.scss";

function AlertModal(props) {
  const { content, isAlert, setIsAlert, setIsModal, alertBtn } = props;

  function handleCancel() {
    setIsModal(false);
    setIsAlert(false);
  }

  return (
    <>
      <ModalPortal>
        <div className="background-modal" />
        <article className="container-alert">
          <h2 className="a11y-hidden">alert</h2>
          <div className="wrapper-alert">
            <strong className="text-alert">{content}</strong>
            <ul className="list-alert">
              <li>
                <button type="button" onClick={handleCancel}>
                  취소
                </button>
              </li>
              <li>
                <button className="btn-do" onClick={alertBtn.onClick}>
                  {alertBtn.content}
                </button>
              </li>
            </ul>
          </div>
        </article>
      </ModalPortal>
    </>
  );
}

export default AlertModal;
