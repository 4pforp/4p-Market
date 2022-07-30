import BackBtn from "../button/BackBtn";
import Savebtn from "../button/SaveBtn";

function UploadHeader(props) {
  return (
    <header className="container-header">
      <section className="top-bar">
        <BackBtn />
        <Savebtn
          text="업로드"
          disabled={props.disabled}
          isActive={props.isActive}
          form={props.form}
        />
      </section>
    </header>
  );
}

export default UploadHeader;
