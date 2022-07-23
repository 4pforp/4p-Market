import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";

// 삭제기능 위한 hook
function useDelete() {
  const navigate = useNavigate();
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
      navigate(0);
    } catch (err) {
      console.error(err);
    }
  }
  return { remove };
}

export default useDelete;
