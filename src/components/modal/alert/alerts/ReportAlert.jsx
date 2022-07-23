import React from "react";
import useReport from "../../../../hooks/useReport";
import CancelBtn from "../alertBase/CancelBtn";
import AlertBtn from "../alertBase/AlertBtn";
import AlertFrame from "../alertBase/AlertFrame";

function ReportAlert({ handleCancel, backUrl }) {
  //신고기능 구현 메서드
  const { report } = useReport();
  function handleReport() {
    //report :  useReport hook 의 매개변수 받는 함수
    report(backUrl);
    handleCancel();
    alert("신고가 완료되었습니다.");
  }

  return (
    <>
      <AlertFrame text="신고하시겠어요?">
        <CancelBtn handleCancel={handleCancel} />
        <AlertBtn handleClick={handleReport}>신고</AlertBtn>
      </AlertFrame>
    </>
  );
}

export default ReportAlert;
