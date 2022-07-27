import { React, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import UserContext from "../../context/UserContext";
import useImageTest from "../../hooks/useImageTest";
import CommentBtn from "../button/CommentBtn";
import LikeBtn from "../button/LikeBtn";
import UserMoreBtn from "../button/UserMoreBtn";
import UserInfoBox from "../user/UserInfoBox";
import Modal from "../../components/modal/Modal";
import useReport from "../../hooks/useReport";
import AlertModal from "../../components/modal/Alert";
import errorImage from "../../assets/image_error.png";
import "./Post.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

function Article({ content, from, remove }) {
  const { imageTest } = useImageTest();
  const { myAccountname } = useContext(UserContext);
  const post = content;
  const author = content.author;
  const accountname = author.accountname;
  const createAtFull = new Date(content.createdAt);
  const [modal, setModal] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const { report } = useReport();
  const navigate = useNavigate();

  const img = imageTest(post.image);
  const imgArray = img.split(",");

  function handleImageError(e) {
    e.target.src = errorImage;
  }
  function openModal() {
    setModal(true);
  }
  const myModalMenuList = [
    {
      content: "삭제",
      onClick: () => {
        setAlertModal(true);
      },
    },
    {
      content: "수정",
      onClick: () => {
        navigate(`/upload/${post.id}`);
      },
    },
  ];

  const userModalMenuList = [
    {
      content: "신고",
      onClick: () => {
        setAlertModal(true);
      },
    },
  ];

  const deleteBtn = {
    content: "삭제",
    onClick: () => {
      remove(`post/${post.id}`);
      setAlertModal(false);
      setModal(false);
    },
  };

  const reportBtn = {
    content: "신고",
    onClick: () => {
      report(`post/${post.id}/report`);
      setAlertModal(false);
      setModal(false);
    },
  };

  function createdAt(createdAt) {
    const betweenTime = new Date() - createdAt;
    const seconds = betweenTime / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  }

  const commentCreatedAt = createdAt(createAtFull);
  return (
    <>
      <article className="article-post">
        <h3 className="a11y-hidden">user의 post</h3>
        {from === "profile" ? (
          <>
            <UserInfoBox
              type="post"
              name={author.username}
              id={"@" + author.accountname}
              img={author.image}
            ></UserInfoBox>
          </>
        ) : (
          <>
            <Link to={"/" + accountname}>
              <UserInfoBox
                type="post"
                name={author.username}
                id={"@" + author.accountname}
                img={author.image}
              ></UserInfoBox>
            </Link>
          </>
        )}
        <main className="contents-post">
          <p className="text-post">{post.content}</p>

          {post.image === "" ? null : (
            <div className="container-post-image">
              <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {imgArray.map((img, i) => (
                  <SwiperSlide key={i}>
                    <Link to={"/" + accountname + "/" + post.id}>
                      <img
                        key={i}
                        src={img}
                        alt="게시글 사진"
                        onError={handleImageError}
                        className="img-post"
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          <div className="container-btn-post">
            <LikeBtn
              heartcount={post.heartCount}
              hearted={post.hearted}
              postid={post.id}
            />
            <CommentBtn
              commentcount={post.commentCount}
              postid={post.id}
              post={post}
              from={from}
              accountname={accountname}
            />
          </div>
          <strong className="text-post-date">
            {from === "home"
              ? commentCreatedAt
              : createAtFull.getFullYear() +
                "년 " +
                (createAtFull.getMonth() + 1) +
                "월 " +
                createAtFull.getDate() +
                "일"}
          </strong>
        </main>
        <UserMoreBtn handleClick={openModal} />
      </article>
      {/* 모닱창  */}
      {myAccountname === accountname ? (
        <>
          {modal && (
            <Modal
              modal={modal}
              setModal={setModal}
              modalMenuList={myModalMenuList}
            />
          )}
          {alertModal && (
            <AlertModal
              alertModal={alertModal}
              setAlertModal={setAlertModal}
              setModal={setModal}
              content={"삭제하시겠어요?"}
              alertBtn={deleteBtn}
            />
          )}
        </>
      ) : (
        <>
          {modal && (
            <Modal
              modal={modal}
              setModal={setModal}
              modalMenuList={userModalMenuList}
            />
          )}
          {alertModal && (
            <AlertModal
              alertModal={alertModal}
              setAlertModal={setAlertModal}
              setModal={setModal}
              content={"신고하시겠어요?"}
              alertBtn={reportBtn}
            />
          )}
        </>
      )}
    </>
  );
}

export default Article;
