import "./PhotoList.scss";

function PhotoList() {
  return (
    <ul className="container-photo-upload">
      <li className="list-photo-upload">
        <button className="btn-remove-img"></button>
      </li>
      <li className="list-photo-upload blind">
        <button className="btn-remove-img"></button>
      </li>
      <li className="list-photo-upload blind">
        <button className="btn-remove-img"></button>
      </li>
    </ul>
  );
}

export default PhotoList;
