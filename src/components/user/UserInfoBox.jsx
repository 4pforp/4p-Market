import "./UserInfoBox.scss";

function UserInfoBox({ type, name, id, subtext, img, children }) {
  return (
    <div className={`wrapper-author ${type}`}>
      <div
        className={`img-author ${type}`}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="wrapper-author-info">
        <strong className={`text-username ${type}`}>{name}</strong>
        <strong className={`text-accountname ${type}`}>{id}</strong>
        <strong className={`text-subtext ${type}`}>{subtext}</strong>
      </div>
      {children}
    </div>
  );
}

export default UserInfoBox;

// UserInfoBox 사용방법
// type = [post, message, chatpage, follow, comment] 중 골라서 작성해주시면 됩니다.
// name은 유저네임 id는 계정이름을 넣을 수 있습니다.
// 그 외 채팅에서 나오는 메세지, 유저 계정 설명 창 등은 {subtext}로 작성해주시면 됩니다.
// 버튼은 {children} 요소로 컴포넌트 안에 넣어주시면 됩니다.

//img props 추가 되었습니다. img에 경로를 넣어주면 자동으로 background로 넣어집니다.
