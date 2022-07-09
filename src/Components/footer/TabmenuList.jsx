import { Link, useLocation } from "react-router-dom";
import "./TabmenuList.scss";

function TabmenuList({ path, style, name }) {
  const location = useLocation();
  return (
    <>
      <li>
        <Link
          to={path}
          //현재경로와 path값이 일치하면 focus 스타일 적용
          className={location.pathname === path ? `${style}focus` : `${style}`}
        >
          <div className="menu-name">{name}</div>
        </Link>
      </li>
    </>
  );
}

export default TabmenuList;
