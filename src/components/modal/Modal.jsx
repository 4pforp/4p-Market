import "./Modal.scss";
import ModalPortal from "./ModalPortal";

function Modal(props) {
  const { modal, setModal, modalMenuList } = props;

  function handleModal() {
    setModal(false);
  }

  return (
    <>
      <ModalPortal>
        <div className="background-modal" modal={modal} onClick={handleModal}>
          <div modal={modal} onClick={(e) => e.stopPropagation()}>
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
