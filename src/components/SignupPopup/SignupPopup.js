import PopupWithForm from "../PopupWithForm/PopupWithForm";
import React, { useEffect } from "react";

function SignupPopup(props) {
  const { isOpen, onClose } = props;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  useEffect(() => {
    setEmail('');
    setPassword('');
    setUsername('');
}, [isOpen]);

  function handleSignupSubmit(e) {
    e.preventDefault();

    props.onSignup({
      email: email,
      password: password,
      username: username,
    });
  }

  return (
    <PopupWithForm
      name="Signup"
      title="Sign up"
      titleClass="popup__title"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSignupSubmit}
      buttonClass="Signup__submit-btn"
      buttonText="Sign up"
      linkClass="signup__signin-link"
      linkText="Sign in"
      onClick={props.onSigninClick}
    >
    <p className="popup__input-email-title">Email</p>
    <input
    type="email"
    name="email"
    id="Signup-email"
    value={email}
    onChange={handleEmailChange}
    className="popup__input popup-add__input"
    placeholder="Enter email"
    required
    minLength="1"
    maxLength="30"
    />
    <div className="errorContainer">
    <span id="email-error" className="popup__input-errorMessage"></span>
    </div>
    <p className="popup__input-password-title">Password</p>
    <input
    type="password"
    name="password"
    id="Signup-password"
    value={password}
    onChange={handlePasswordChange}
    className="popup__input popup-Signup__input"
    placeholder="Enter password"
    required
    />
    <div className="errorContainer">
    <span
        id="password-error"
        className="popup__input-errorMessage"
    ></span>
    </div>
    <p className="popup__input-password-title">Username</p>
    <input
    type="text"
    name="name"
    id="Signup-username"
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
