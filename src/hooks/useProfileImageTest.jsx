import defaultProfile from "../assets/4p_profile.png";

// 에러이미지 예외처리 Hook
function useProfileTest() {
  function imageTest(img) {
    const testedImg =
      /Ellipse/.test(img) ||
      /heroku/.test(img) ||
      (!/mandarin/.test(img) && !/base64/.test(img)) ||
      /kr\/https/.test(img) ||
      /1657268443649/.test(img) ||
      null ||
      undefined
        ? defaultProfile
        : img;

    return testedImg;
  }
  return { imageTest };
}

export default useProfileTest;
