import UploadIconBtn from "../button/UploadIconBtn";
import "./PageFooter.scss";

function ChatroomFooter() {
  return (
    <>
      <footer>
        <form method="post" className="container-form-pagefooter">
          <UploadIconBtn img="upload-file-gray.svg" name="upload-chat" />
          <textarea
            className="textarea-pagefooter"
            placeholder="메시지 입력하기"
          />
          <button type="submit" className="btn-send-footer">
            전송
          </button>
        </form>
      </footer>
    </>
  );
}

export default ChatroomFooter;
