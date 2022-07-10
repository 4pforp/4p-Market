function Posts() {
  return (
    <>
      <ol className="list-posts">
        <li className="item-post">
          <article className="article-post">
            <header className="header-post">
              <div className="image-myprofile post"></div>
              <h3 className="text-username post">애월읍 위니브 감귤농장</h3>
              <span className="text-accountname post">@weniv_Mandarin</span>
            </header>
            <main className="contents-post">
              <p className="text-post">
                옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
                넣는 풍부하게 뛰노는 인생의 힘있다.
              </p>
              <img src="" alt="" className="image-post" />
              <div className="button-like">
                <button className="button-post">
                  <strong className="a11y-hidden">like</strong>
                </button>
                58
              </div>
              <div className="button-comment">
                <button className="button-post">
                  <strong className="a11y-hidden">comment</strong>
                </button>
                12
              </div>
              <strong className="text-post-date">2020년 10월 21일</strong>
            </main>
            <button className="button-delete">delete</button>
          </article>
        </li>
      </ol>
    </>
  );
}

export default Posts;
