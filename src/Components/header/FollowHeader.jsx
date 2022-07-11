import BackBtn from "../button/BackBtn";
import "./Header.scss";

function FollowHeader({ title }) {
  return (
    <>
      <header className="header-layout">
        <section className="top-bar follow">
          <BackBtn />
          <h2 className="title">{title}</h2>
        </section>
      </header>
    </>
  );
}

export default FollowHeader;
