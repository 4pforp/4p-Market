import "./Post.scss";

function Post() {
  return (
    <>
      <li className="item-post">
        <article className="article-post">
          <h3 className="a11y-hidden">user의 post</h3>
          <div className="image-myprofile post"></div>
          <header className="header-post">
            <strong className="text-username post">
              애월읍 위니브 감귤농장
            </strong>
            <strong className="text-accountname post">@weniv_Mandarin</strong>
          </header>
          <main className="contents-post">
            <p className="text-post">
              옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
              뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
              넣는 풍부하게 뛰노는 인생의 힘있다.
            </p>
            <div className="container-post-image">
              <img src="" alt="" />
            </div>
            <div className="container-button-post">
              <div className="button-post">
                <button className="like">
                  <strong className="a11y-hidden">like</strong>
                </button>
                58
              </div>
              <div className="button-post">
                <button className="comment">
                  <strong className="a11y-hidden">comment</strong>
                </button>
                12
              </div>
            </div>
            <strong className="text-post-date">2020년 10월 21일</strong>
          </main>
          <button className="button-delete">delete</button>
        </article>
      </li>
    </>
  );
}

export default Post;
