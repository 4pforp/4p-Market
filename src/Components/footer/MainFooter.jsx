import TabmenuList from "./TabmenuList";
import "./MainFooter.scss";

function MainFooter() {
  const tabmenu = [
    {
      id: 1,
      style: "link-home",
      path: "/home",
      name: "홈",
    },
    {
      id: 2,
      style: "link-chat",
      path: "/chat",
      name: "채팅",
    },
    {
      id: 3,
      style: "link-upload",
      path: "/upload",
      name: "게시물 작성",
    },
    {
      id: 4,
      style: "link-profile",
      path: "/profile",
      name: "프로필",
    },
  ];
  return (
    <>
      <footer>
        <nav>
          <ul className="wrapper-list-tabmenu">
            {tabmenu.map((i) => (
              <TabmenuList
                key={i.id}
                style={i.style}
                path={i.path}
                name={i.name}
              />
            ))}
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default MainFooter;
