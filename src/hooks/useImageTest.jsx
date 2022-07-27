import errorImage from "../assets/image_error.png";

// 에러이미지 예외처리 Hook
function useImageTest() {
  function imageTest(img) {
    const testedImg =
      /Ellipse/.test(img) ||
      /heroku/.test(img) ||
      (!/mandarin/.test(img) && !/base64/.test(img)) ||
      /kr\/https/.test(img) ||
      /1657268443649/.test(img) ||
      null ||
      undefined
        ? errorImage
        : img;

    return testedImg;
  }
  return { imageTest };
}

export default useImageTest;
