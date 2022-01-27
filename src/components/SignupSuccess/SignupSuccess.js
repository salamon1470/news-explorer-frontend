import PopupWithForm from "../PopupWithForm/PopupWithForm";
import React from "react";

function SignupSuccess(props) {
  const { isOpen, onClose } = props;

  return (
    <PopupWithForm
      name="signup-success"
      title="Registration successfully completed!"
      titleClass="signup-success__title"
      isOpen={isOpen}
      onClose={onClose}
      closeButtonClass="signup-success__close-btn"
      buttonClass="signup-success__submit-btn"
      entryClass= "signup-success__entry"
      linkClass="signin__signup-link"
      linkText="Sign in"
      onClick={props.onSigninClick}
    >
    </PopupWithForm>
  );
}

export default SignupSuccess;
