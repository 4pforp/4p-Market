import BackBtn from "../button/BackBtn";
import "./InfoNav.scss";

function FollowNav({ title }) {
  return (
    <>
      <header className="header-layout">
        <section className="top-bar">
          <BackBtn />
          <h2 className="title">{title}</h2>
        </section>
      </header>
    </>
  );
}

export default FollowNav;
