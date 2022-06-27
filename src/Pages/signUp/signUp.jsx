import React, { useState } from "react";
import "./signUp.scss";
import ProfileSet from "./profileSet/ProfileSet";
import EmailSignUp from "./emailSignUp/EmailSignUP";
import UserContext from "./contexts/UserContext";

function SignUp() {
  const userForm = {
    username: "",
    email: "",
    password: "",
    accountname: "",
    intro: "",
    image: "",
  };
  const [user, setUser] = useState(userForm);
  const [view, setView] = useState(false);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <main>
        {view === false ? (
          <EmailSignUp view={view} setView={setView} />
        ) : (
          <ProfileSet />
        )}
      </main>
    </UserContext.Provider>
  );
}

export default SignUp;
