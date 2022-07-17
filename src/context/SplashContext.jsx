import { createContext, useState } from "react";

const SplashContext = createContext();
export default SplashContext;

const SplashContextProvider = ({ children }) => {
  const [splash, setSplash] = useState(false);
  return (
    <SplashContext.Provider
      value={{
        splash,
        setSplash,
      }}
    >
      {children}
    </SplashContext.Provider>
  );
};

export { SplashContextProvider };
