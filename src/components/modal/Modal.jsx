import "./Modal.scss";
import ModalPortal from "./ModalPortal";

function Modal(props) {
  const { isModal, setIsModal, modalMenuList } = props;

  function handleModal() {
    setIsModal(false);
  }

  return (
    <>
      <ModalPortal>
        <div className="background-modal" onClick={handleModal}>
          <div onClick={(e) => e.stopPropagation()}>
            <section className="container-modal">
              <h2 className="a11y-hidden">메뉴</h2>
              <ul className="wrapper-list-modal">
                {modalMenuList.map((item, i) => {
                  return (
                    <li key={i} onClick={item.onClick}>
                      {item.content}
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
      </ModalPortal>
    </>
  );
}
export default Modal;
