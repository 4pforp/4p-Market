import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import SaveHeader from "../../components/header/SaveHeader";
import UploadProductImg from "../uploadProductPage/uploadProductImg/UploadProductImg";
import UploadProductInput from "../uploadProductPage/uploadProductInput/UploadProductInput";
import NotFound from "../../components/notFound/NotFound";
import pendingImg from "../../assets/logo_loading_purple.svg";
import "../uploadProductPage/UploadProductPage.scss";

function UpdateProductPage() {
  const { token, myAccountname } = useContext(UserContext);
  const params = useParams();
  const navigate = useNavigate();
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [disabled, setIsDisabled] = useState(true);
  const [itemImage, setItemImage] = useState("");
  const [view, setView] = useState("pending");

  const productid = params.productid;

  const productData = {
    product: {
      itemName: itemName,
      price: price,
      link: link,
      itemImage: itemImage,
    },
  };

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

  //기존 상품 데이터 요청
  useEffect(() => {
    async function getProduct() {
      try {
        const res = await axios.get(
          "https://mandarin.api.weniv.co.kr/product/detail/" + productid,
          {
            headers: {
              Authorization: token,
              "Content-type": "application/json",
            },
          }
        );
        setItemImage(res.data.product.itemImage);
        setItemName(res.data.product.itemName);
        setPrice(res.data.product.price);
        setLink(res.data.product.link);
        setView("fulfilled");
      } catch (err) {
        setView("rejected");
      }
    }
    getProduct();
  }, []);

  //상품 수정 요청
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.put(
        "https://mandarin.api.weniv.co.kr/product/" + productid,
        productData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/" + myAccountname);
    } catch (err) {
      setView("rejected");
    }
  }

  return (
    <>
      {view === "fulfilled" && (
        <form
          method="POST"
          encType="multipart/form-data"
          className="container-form-product"
          onSubmit={handleSubmit}>
          <SaveHeader isActive={isActive} disabled={disabled} />
          <h1 className="a11y-hidden">상품등록페이지</h1>
          <UploadProductImg itemImage={itemImage} setItemImage={setItemImage} />
          <UploadProductInput
            itemName={itemName}
            setItemName={setItemName}
            price={price}
            setPrice={setPrice}
            link={link}
            setLink={setLink}
            setIsActive={setIsActive}
            setIsDisabled={setIsDisabled}
          />
        </form>
      )}
      {view === "pending" && (
        <>
          <img src={pendingImg} className="img-pending" alt="loading" />
        </>
      )}
      {view === "rejected" && (
        <>
          <NotFound />
        </>
      )}
    </>
  );
}

export default UpdateProductPage;
