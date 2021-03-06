import { useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

// 신고기능 위한 hook
function useReport() {
  const { token } = useContext(UserContext);

  async function report(backUrl) {
    try {
      const res = await axios.post(
        "https://mandarin.api.weniv.co.kr/" + backUrl,
        [],
        {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        alert("신고가 완료되었습니다!");
      }
    } catch (err) {
      console.error(err);
    }
  }
  return { report };
}
export default useReport;
