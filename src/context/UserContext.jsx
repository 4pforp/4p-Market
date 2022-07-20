import { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;
const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [myAccountname, setMyAccountname] = useState(
    localStorage.getItem("accountname")
  );
  const [myImage, setMyImage] = useState();
  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        myAccountname,
        setMyAccountname,
        myImage,
        setMyImage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
