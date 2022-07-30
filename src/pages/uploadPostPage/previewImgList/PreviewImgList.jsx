import "./PreviewImgList.scss";

function PreviewImgList({ mapdata, onClick }) {
  if (mapdata !== null || mapdata.length > 0) {
    return (
      <ul className="container-photo-upload">
        {mapdata.map((img, idx) => {
          return (
            <li
              key={idx}
              className="list-photo-upload"
              style={{ backgroundImage: `url(${img})` }}
            >
              <button
                id={idx}
                onClick={onClick}
                className="btn-remove-img"
              ></button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PreviewImgList;
