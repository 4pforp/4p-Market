import { useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

// 삭제기능 위한 hook
function useDelete() {
  const { token } = useContext(UserContext);

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
    } catch (err) {
      console.error(err);
    }
  }
  return { remove };
}

export default useDelete;
