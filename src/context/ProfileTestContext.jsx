import { createContext } from "react";
import defaultProfile from "../assets/4p_profile.png";
const ProfileTestContext = createContext();

export default ProfileTestContext;

const ProfileTestContextProvider = ({ children }) => {
  const ProfileTest = (img) => {
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
  };

  return (
    <ProfileTestContext.Provider
      value={{
        ProfileTest,
      }}
    >
      {children}
    </ProfileTestContext.Provider>
  );
};

export { ProfileTestContextProvider };
