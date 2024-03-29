import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import SaveHeader from "../../components/header/SaveHeader";
import UploadProductImg from "./uploadProductImg/UploadProductImg";
import ProductInput from "./uploadProductInput/UploadProductInput";
import NotFound from "../../components/notFound/NotFound";
import "./UploadProductPage.scss";

function UploadProductPage() {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [disabled, setIsDisabled] = useState(true);
  const [itemImage, setItemImage] = useState("");
  const [view, setView] = useState("");
  const { token, myAccountname } = useContext(UserContext);
  const navigate = useNavigate();

  // 저장 버튼활성화 기능
  useEffect(() => {
    //상품 판매 링크 유효성 검사
    const checkLink =
      /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

    if (
      itemName.length > 1 &&
      price.length !== 0 &&
      checkLink.test(link) &&
      itemImage.length !== 0
    ) {
      setIsActive(true);
      setIsDisabled(false);
    } else {
      setIsActive(false);
      setIsDisabled(true);
    }
  });

  //상품 저장 버튼 클릭시 POST
  function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      product: {
        itemName: itemName,
        price: parseInt(price.replace(/[^0-9]/g, ""), 10),
        link: link,
        itemImage: itemImage,
      },
    };
    async function sendPost() {
      try {
        const res = await axios.post(
          "https://mandarin.api.weniv.co.kr/product",
          postData,
          {
            headers: {
              Authorization: token,
              "Content-type": "application/json",
            },
          }
        );
      } catch (err) {
        setView("rejected");
      }
    }
    postData && sendPost();
    navigate(`/${myAccountname}`);
  }

  return (
    <>
      <form
        method="POST"
        encType="multipart/form-data"
        className="container-form-product"
        onSubmit={handleSubmit}>
        <SaveHeader isActive={isActive} disabled={disabled} />
        <h1 className="a11y-hidden">상품등록페이지</h1>
        <UploadProductImg itemImage={itemImage} setItemImage={setItemImage} />
        <ProductInput
          itemName={itemName}
          setItemName={setItemName}
          price={price}
          setPrice={setPrice}
          link={link}
          setLink={setLink}
          setIsActive={setIsActive}
          setIsDisabled={setIsDisabled}
        />
        {view === "rejected" && (
          <>
            <NotFound />
          </>
        )}
      </form>
    </>
  );
}

export default UploadProductPage;
