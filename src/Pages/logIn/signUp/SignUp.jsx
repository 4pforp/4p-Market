import React, { useState } from "react";
import "./SignUp.scss";
import ProfileSet from "./ProfileSet";
import EmailSignUp from "./EmailSignUP";
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
        {/* {view === false ? (
          <EmailSignUp view={view} setView={setView} />
        ) : (
          <ProfileSet />
        )} */}
        <ProfileSet />
      </section>
    </UserContext.Provider>
  );
}

export default SignUp;
