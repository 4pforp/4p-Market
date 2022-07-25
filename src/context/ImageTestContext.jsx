import { createContext } from "react";
import errorImage from "../assets/image_error.png";
const ImageTestContext = createContext();

export default ImageTestContext;

const ImageTestContextProvider = ({ children }) => {
  const ImageTest = (img) => {
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
