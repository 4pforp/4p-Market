import User from "./User";
import "./Follow.scss";

function UserList({ size, followList }) {
  const list = followList.map((user) => {
    return (
      <User
        key={user._id}
        size={size}
        accountname={user.accountname}
        username={user.username}
        image={user.image}
        intro={user.intro}
        followings={user.followings}
        followers={user.followers}
        isfollow={user.isfollow}
      />
    );
  });
  return <>{list}</>;
}

export default UserList;
