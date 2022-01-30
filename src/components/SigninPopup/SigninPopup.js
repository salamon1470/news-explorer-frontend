import PopupWithForm from "../PopupWithForm/PopupWithForm";
import React, { useEffect } from "react";
import mainapi from "../../utils/MainApi";
import { useHistory } from "react-router-dom";

function SigninPopup(props) {
  const { isOpen, onClose } = props;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  function handleValidateEmail() {
    const emailInput = document.getElementById("signin-email")
    const errorEmailElement = document.getElementById("email-error");
    errorEmailElement.textContent = emailInput.validationMessage;
    errorEmailElement.classList.add("popup__input-errorMessage");
    if (!emailInput.validity.valid) {
      emailInput.classList.add("popup__input_border_error")
    } else {
      emailInput.classList.remove("popup__input_border_error");
      errorEmailElement.classList.remove("popup__input-errorMessage");
    }
  }

  function handleValidatePassword() {
    const passwordInput = document.getElementById("signin-password")
    const errorPasswordElement = document.getElementById("password-error");
    errorPasswordElement.textContent = passwordInput.validationMessage;
    errorPasswordElement.classList.add("popup__input-errorMessage");
    if (!passwordInput.validity.valid) {
      passwordInput.classList.add("popup__input_border_error")
    } else {
      passwordInput.classList.remove("popup__input_border_error");
      errorPasswordElement.classList.remove("popup__input-errorMessage");
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
    const errorEmailElement = document.getElementById("email-error");
    errorEmailElement.textContent = ""
    const emailInput = document.getElementById("signin-email")
    emailInput.classList.remove("popup__input_border_error");
    const passwordInput = document.getElementById("signin-password");
    const errorPasswordElement = document.getElementById("password-error");
    errorPasswordElement.textContent = "";
    passwordInput.classList.remove("popup__input_border_error");
}, [isOpen]);

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
        return data;
      } else {
        return;
      }
    })
    .catch((err) => {
      if (err === "Error: 401") {
        const errorEmailElement = document.getElementById("email-error");
        errorEmailElement.classList.add("popup__input-errorMessage");
        errorEmailElement.textContent = "Incorrect email or password";
        const errorPasswordElement = document.getElementById("password-error");
        errorPasswordElement.textContent = "Incorrect email or password";
        errorPasswordElement.classList.add("popup__input-errorMessage");
      }
      console.log(err);
    })
  };

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainapi.checkToken(jwt)
      .then((res) => {
        props.setLoggedIn(true);
        history.push(
          '/home'); 
        return res;
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }, [props, props.setLoggedIn, history, localStorage])

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
    onChange={handleEmailChange}
    className="popup__input popup-add__input"
    placeholder="Enter email"
    required
    minLength="1"
    maxLength="30"
    />
    <div className="errorContainer">
    <span 
        id="email-error" 
        className="popup__input-errorMessage"
    ></span>
    </div>
    <p className="popup__input-password-title">Password</p>
    <input
    type="password"
    name="password"
    id="signin-password"
    value={password}
    onChange={handlePasswordChange}
    className="popup__input popup-signin__input"
    placeholder="Enter password"
    required
    />
    <div className="errorContainer">
    <span
        id="password-error"
        className="popup__input-errorMessage"
    ></span>
    </div>

    </PopupWithForm>
  );
}

export default SigninPopup;
