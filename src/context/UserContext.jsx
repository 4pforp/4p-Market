import { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;
const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [myAccountname, setMyAccountname] = useState(
    localStorage.getItem("accountname")
  );
  const [myUsername, setMyUsername] = useState(
    localStorage.getItem("username")
  );
  const [myImage, setMyImage] = useState(localStorage.getItem("image"));
  const [myIntro, setMyIntro] = useState(localStorage.getItem("intro"));
  const [myEmail, setMyEmail] = useState(localStorage.getItem("email"));
  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        myAccountname,
        setMyAccountname,
        myUsername,
        setMyUsername,
        myIntro,
        setMyIntro,
        myEmail,
        setMyEmail,
        myImage,
        setMyImage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
