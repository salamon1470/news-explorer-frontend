import PopupWithForm from "../PopupWithForm/PopupWithForm";
import React, { useEffect } from "react";
import mainapi from "../../utils/MainApi";

function SignupPopup(props) {
  const { isOpen, onClose } = props;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  function handleValidateEmail() {
    const emailInput = document.getElementById("signup-email");
    const errorEmailElement = document.getElementById("signup-email-error");
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
    const passwordInput = document.getElementById("signup-password");
    const errorPasswordElement = document.getElementById("signup-password-error");
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

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  useEffect(() => {
    setEmail('');
    setPassword('');
    setUsername('');
    const errorEmailElement = document.getElementById("signup-email-error");
    errorEmailElement.textContent = ""
    const emailInput = document.getElementById("signup-email")
    emailInput.classList.remove("popup__input_border_error");
    const passwordInput = document.getElementById("signup-password");
    const errorPasswordElement = document.getElementById("signup-password-error");
    errorPasswordElement.textContent = "";
    passwordInput.classList.remove("popup__input_border_error");
}, [isOpen]);

  function handleSignupSubmit(e) {
    e.preventDefault();
    mainapi.register(email, password, username)
    .then((res) => {
      if (res.status === 201) {
        props.onSignupSuccess();
      }
    })
    .catch((err) => {
      if (err === "Error: 409") {
        const errorEmailElement = document.getElementById("signup-email-error");
        errorEmailElement.classList.add("popup__input-errorMessage");
        errorEmailElement.textContent = "User already exists";
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
    onChange={handleEmailChange}
    className="popup__input popup-add__input"
    placeholder="Enter email"
    required
    minLength="1"
    maxLength="30"
    />
    <div className="errorContainer">
    <span id="signup-email-error" className="popup__input-errorMessage"></span>
    </div>
    <p className="popup__input-password-title">Password</p>
    <input
    type="password"
    name="password"
    id="signup-password"
    value={password}
    onChange={handlePasswordChange}
    className="popup__input popup-Signup__input"
    placeholder="Enter password"
    required
    />
    <div className="errorContainer">
    <span
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
        className="popup__input-errorMessage"
    ></span>
    </div>
    </PopupWithForm>
  );
}

export default SignupPopup;
