import { Link } from "react-router-dom";
import "./TabmenuList.scss";

function TabmenuList({ path, style, name }) {
  return (
    <>
      <li>
        <Link to={path} className={style}>
          <div className="menu-name">{name}</div>
        </Link>
      </li>
    </>
  );
}

export default TabmenuList;
