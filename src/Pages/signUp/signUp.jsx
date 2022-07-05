import React, { useState } from "react";
import "./SignUp.scss";
import ProfileSet from "./profileSet/ProfileSet";
import EmailSignUp from "./emailSignUp/EmailSignUP";
import UserContext from "./UserContext";

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
      <section className="signup-section">
        {view === false ? (
          <EmailSignUp view={view} setView={setView} />
        ) : (
          <ProfileSet />
        )}
      </section>
    </UserContext.Provider>
  );
}

export default SignUp;
