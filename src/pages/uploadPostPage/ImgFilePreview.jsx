import { forwardRef } from "react";
import "./ImgFilePreview.scss";

function ImgFilePreview(mapdata, ref) {
  return (
    <ul className="container-photo-upload">
      <li className="list-photo-upload" ref={ref}>
        <button className="btn-remove-img"></button>
      </li>
    </ul>
  );
}

export default forwardRef(ImgFilePreview);
