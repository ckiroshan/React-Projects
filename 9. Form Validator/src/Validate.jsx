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

  // Event Handlers
  function validate(e) {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be at least 8 characters long.");
      setUserColor("red");
    }
    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Email should have @gmail.");
      setEmailColor("red");
    }
    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must be at least 8 characters long.");
      setPasswordColor("red");
    }
    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords didn't match.");
      setConfirmPasswordColor("red");
    }
  }

  return (
    <>
      <h1 className="heading">Form Component</h1>
      <div className="card">
        <div className="image-container">
          <img className="card-image" src={loginImage} alt="" />
        </div>
        <form>
          <input type="text" placeholder="Name" style={{ borderColor: userColor }} value={username} onChange={(e) => setUserName(e.target.value)} />
          <p className="error">{errorUsername}</p>
          <input type="text" placeholder="Email" style={{ borderColor: emailColor }} value={email} onChange={(e) => setEmail(e.target.value)} />
          <p className="error">{errorEmail}</p>
          <input type="password" placeholder="Password" style={{ borderColor: passwordColor }} value={password} onChange={(e) => setPassword(e.target.value)} />
          <p className="error">{errorPassword}</p>
          <input type="password" placeholder="Confirm Password" style={{ borderColor: confirmPasswordColor }} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <p className="error">{errorConfirmPassword}</p>
          <button className="btn-submit" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Validate;
