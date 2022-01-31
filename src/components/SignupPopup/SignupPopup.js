import PopupWithForm from "../PopupWithForm/PopupWithForm";
import React, { useEffect, useRef } from "react";
import mainapi from "../../utils/MainApi";

function SignupPopup(props) {
  const { isOpen, onClose, onSignupSuccess } = props;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [emailErrorMessageClass, setEmailErrorMessageClass] = React.useState(false);
  const [emailErrorClass, setEmailErrorClass] = React.useState(false);
  const [passwordErrorMessageClass, setPasswordErrorMessageClass] = React.useState(false);
  const [passwordErrorClass, setPasswordErrorClass] = React.useState(false);

  const emailInput = useRef(null);
  const errorEmailElement = useRef(null);
  const passwordInput = useRef(null);
  const errorPasswordElement = useRef(null);


  function handleValidateEmail() {
    errorEmailElement.current.textContent = emailInput.current.validationMessage;
    setEmailErrorMessageClass(true);
    if (!emailInput.current.validity.valid) {
      setEmailErrorClass(true);
    } else {
      setEmailErrorMessageClass(false);
      setEmailErrorClass(false);
    }
  }

  function handleValidatePassword() {
    errorPasswordElement.current.textContent = passwordInput.current.validationMessage;
    setPasswordErrorMessageClass(true);
    if (!passwordInput.current.validity.valid) {
      setPasswordErrorClass(true);
    } else {
      setPasswordErrorMessageClass(false);
      setPasswordErrorClass(false);
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    handleValidateEmail()
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    handleValidatePassword()
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  useEffect(() => {
    setEmail('');
    setPassword('');
    setUsername('');
    errorEmailElement.current.textContent = ""
    setEmailErrorClass(false);
    errorPasswordElement.current.textContent = "";
    setPasswordErrorClass(false);
}, [isOpen]);

  function handleSignupSubmit(e) {
    e.preventDefault();
    mainapi.register(email, password, username)
    .then(() => {
        onSignupSuccess();
    })
    .catch((err) => {
      if (err === "Error: 409") {
        setEmailErrorClass(true);
        setEmailErrorMessageClass(true);
        errorEmailElement.current.textContent = "User already exists";
      }
      console.log(err);
    })
  }


  return (
    <PopupWithForm
      name="Signup"
      title="Sign up"
      titleClass="popup__title"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSignupSubmit}
      buttonClass="popup__submit-btn"
      buttonText="Sign up"
      closeButtonClass="popup__close-btn"
      entryClass="popup__entry"
      linkClass="signup__signin-link"
      linkText="Sign in"
      onClick={props.onSigninClick}
    >
    <p className="popup__input-email-title">Email</p>
    <input
    type="email"
    name="email"
    id="signup-email"
    value={email}
    ref={emailInput}
    onChange={handleEmailChange}
    className={`popup__input popup-signup__input ${ emailErrorClass ? "popup__input_border_error" : ""}`}
    placeholder="Enter email"
    required
    minLength="1"
    maxLength="30"
    />
    <div className="errorContainer">
    <span 
        ref={errorEmailElement}
        id="signup-email-error" 
        className={emailErrorMessageClass ? "popup__input-errorMessage" : ""}
     ></span>
    </div>
    <p className="popup__input-password-title">Password</p>
    <input
    type="password"
    name="password"
    id="signup-password"
    value={password}
    ref={passwordInput}
    onChange={handlePasswordChange}
    className={`popup__input popup-signup__input ${ passwordErrorClass ? "popup__input_border_error" : ""}`}
    placeholder="Enter password"
    required
    />
    <div className="errorContainer">
    <span
        ref={errorPasswordElement}
        id="signup-password-error"
        className="popup__input-errorMessage"
    ></span>
    </div>
    <p className="popup__input-password-title">Username</p>
    <input
    type="text"
    name="name"
    id="signup-username"
    value={username}
    onChange={handleUsernameChange}
    className="popup__input popup-Signup__input"
    placeholder="Enter your username"
    required
    />
    <div className="errorContainer">
    <span
        id="username-error"
        className={passwordErrorMessageClass ? "popup__input-errorMessage" : "" }
    ></span>
    </div>
    </PopupWithForm>
  );
}

export default SignupPopup;
