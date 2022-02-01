import PopupWithForm from "../PopupWithForm/PopupWithForm";
import React, { useEffect, useRef } from "react";
import mainapi from "../../utils/MainApi";
import { useHistory } from "react-router-dom";
import react from "react";

function SigninPopup(props) {
  const { isOpen, onClose } = props;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailErrorMessageClass, setEmailErrorMessageClass] = React.useState(false);
  const [emailErrorClass, setEmailErrorClass] = React.useState(false);
  const [passwordErrorMessageClass, setPasswordErrorMessageClass] = React.useState(false);
  const [passwordErrorClass, setPasswordErrorClass] = React.useState(false);
  const history = useHistory();

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

  useEffect(() => {
    setEmail('');
    setPassword('');
    errorEmailElement.current.textContent = ""
    setEmailErrorClass(false);
    errorPasswordElement.current.textContent = "";
    setPasswordErrorClass(false);
}, [isOpen]);

function refreshPage() {
  window.location.reload(false);
}

  function handleLoginSubmit(e) {
    e.preventDefault();
    mainapi.login(email, password)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        onClose();
        props.setLoggedIn(true);
        history.push(
          '/home');
        refreshPage()
        return data;
      } else {
        return;
      }
    })
    .catch((err) => {
      if (err === "Error: 401") {
        setEmailErrorClass(true);
        setPasswordErrorClass(true);
        setEmailErrorMessageClass(true);
        setPasswordErrorMessageClass(true);
        errorEmailElement.current.textContent = "Incorrect email or password";
        errorPasswordElement.current.textContent = "Incorrect email or password";
      }
      console.log(err);
    })
  };

  return (
    <PopupWithForm
      name="signin"
      title="Sign in"
      titleClass="popup__title"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleLoginSubmit}
      buttonClass="popup__submit-btn"
      buttonText="Sign in"
      closeButtonClass="popup__close-btn"
      entryClass="popup__entry"
      linkClass="signin__signup-link"
      linkText="Sign up"
      onClick={props.onSignupClick}
    >
    <p className="popup__input-email-title">Email</p>
    <input
    type="email"
    name="email"
    id="signin-email"
    value={email}
    ref={emailInput}
    onChange={handleEmailChange}
    className={`popup__input popup-signin__input ${ emailErrorClass ? "popup__input_border_error" : ""}`}
    placeholder="Enter email"
    required
    minLength="1"
    maxLength="30"
    />
    <div className="errorContainer">
    <span 
    ref={errorEmailElement}
        id="email-error" 
        className={emailErrorMessageClass ? "popup__input-errorMessage" : ""}
    ></span>
    </div>
    <p className="popup__input-password-title">Password</p>
    <input
    type="password"
    name="password"
    id="signin-password"
    value={password}
    ref={passwordInput}
    onChange={handlePasswordChange}
    className={`popup__input popup-signin__input ${ passwordErrorClass ? "popup__input_border_error" : ""}`}
    placeholder="Enter password"
    required
    />
    <div className="errorContainer">
    <span
        ref={errorPasswordElement}
        id="password-error"
        className={passwordErrorMessageClass ? "popup__input-errorMessage" : "" }
    ></span>
    </div>

    </PopupWithForm>
  );
}

export default SigninPopup;
