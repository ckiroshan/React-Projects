import { useState } from "react";
import loginImage from "../src/assets/images/login.jpg";

const Validate = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error States
  const [errorUsername, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  // Color States
  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  

  return (
    <>
      <h1 className="heading">Form Component</h1>
      <div className="card">
        <div className="image-container">
          <img className="card-image" src={loginImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Validate;
