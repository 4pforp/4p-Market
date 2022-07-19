import { createContext } from "react";
import defaultProfile from "../assets/4p_profile.png";

const ImageTestContext = createContext();

export default ImageTestContext;

const ImageTestContextProvider = ({ children }) => {
  const ImageTest = (img) => {
    const testedImg =
      /Ellipse/.test(img) ||
      /heroku/.test(img) ||
      (!/mandarin/.test(img) && !/base64/.test(img)) ||
      /kr\/https/.test(img) ||
      /1657268443649/.test(img)
        ? defaultProfile
        : img;

    return testedImg;
  };

  return (
    <ImageTestContext.Provider
      value={{
        ImageTest,
      }}
    >
      {children}
    </ImageTestContext.Provider>
  );
};

export { ImageTestContextProvider };
