import { useContext, useState, useRef } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

// 삭제기능 위한 hook
function useDelete() {
  const { token } = useContext(UserContext);
  const [isUpdate, setIsUpdate] = useState(false);

  //댓글 삭제시 카운트 다운
  function handleCount() {
    const commentCount = document.querySelector(".text-comment-num");
    commentCount.innerHTML--;
  }

  async function remove(backUrl) {
    try {
      const res = await axios.delete(
        "https://mandarin.api.weniv.co.kr/" + backUrl,
        {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        }
      );
      // 삭제 처리 되었을 때 isUpdate의 상태값을 true로 변경
      if (parseInt(res.data.status) === 200) {
        setIsUpdate(!isUpdate);
        handleCount();
      }
    } catch (err) {
      console.error(err);
    }
  }
  return { remove, isUpdate, setIsUpdate };
}

export default useDelete;
