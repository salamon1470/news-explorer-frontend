import PopupWithForm from "../PopupWithForm/PopupWithForm";
import React, { useEffect } from "react";

function SigninPopup(props) {
  const { isOpen, onClose } = props;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
}, [isOpen]);

  function handleSigninSubmit(e) {
    e.preventDefault();

    props.onSignin({
      email: email,
      password: password,
    });
  }

  return (
    <PopupWithForm
      name="signin"
      title="Sign in"
      titleClass="popup__title"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSigninSubmit}
      buttonClass="signin__submit-btn"
      buttonText="Sign in"
      linkClass="signin__signup-link"
      linkText="Sign up"
      onClick={props.onSignupClick}
    >
    <p className="popup__input-email-title">Email</p>
    <input
    type="email"
    name="name"
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
    name="link"
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
