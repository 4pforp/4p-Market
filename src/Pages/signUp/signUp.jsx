// import axios from "axios";
import React, { useState } from "react";
import "./signUp.scss";
import ProfileSet from "../profileSet/ProfileSet";
import EmailSignUp from "../emailSignUp/EmailSignUP";

function SignUp() {
  const [view, setView] = useState(false);
  return (
    <main>
      {view === false ? (
        <EmailSignUp view={view} setView={setView} />
      ) : (
        <ProfileSet />
      )}
    </main>
  );
}

export default SignUp;
