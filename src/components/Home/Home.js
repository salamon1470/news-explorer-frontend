import React from "react";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
// import api from "../utils/api";
// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import About from "../About/About";
import SigninPopup from "../SigninPopup/SigninPopup"
import SignupPopup from "../SignupPopup/SignupPopup";
import SearchResults from "../SearchResults/SearchResults";
import Preloader from "../Preloader/Preloader";
import ResultNotFound from "../ResultNotFound/ResultNotFound";
import SignupSuccess from "../SignupSuccess/SignupSuccess";

function Home(props) {

    const [isSigninPopupOpen, setIsSigninPopupOpen] = React.useState(false);
    const [isSignupPopupOpen, setIsSignupPopupOpen] = React.useState(false);
    const [isSignupSuccessOpen, setIsSignupSuccessOpen] = React.useState(false);

    const headerPopup = document.querySelector(".popup-header");

    function handleSigninClick() {
        setIsSigninPopupOpen(true);
        setIsSignupPopupOpen(false);
        setIsSignupSuccessOpen(false);
        if (headerPopup.classList.contains("popup_visible")) {
          headerPopup.classList.remove("popup_visible");
        }
    }

    function handleSignupClick() {
      setIsSignupPopupOpen(true);
      setIsSigninPopupOpen(false);
  }

  function handleSignupSubmit() {
    setIsSignupSuccessOpen(true);
    setIsSignupPopupOpen(false);
  }
      
    function closeAllPopups() {
      setIsSigninPopupOpen(false);
      setIsSignupPopupOpen(false);
      setIsSignupSuccessOpen(false);
    }
    
    return (
        <div className="home">
            <Main
              onSigninClick={handleSigninClick}
            />
            <Preloader />
            <ResultNotFound />
            <SearchResults />
            <About aboutTitle={"About the author"} 
            aboutDescription={"This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know. "} 
            aboutExpertise={"You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers."} />
            <SigninPopup  isOpen={isSigninPopupOpen} onClose={closeAllPopups} onSignupClick={handleSignupClick}/>
            <SignupPopup isOpen={isSignupPopupOpen} onClose={closeAllPopups} onSigninClick={handleSigninClick} onSignupSubmit={handleSignupSubmit} /> 
            <SignupSuccess isOpen={isSignupSuccessOpen} onClose={closeAllPopups} onSigninClick={handleSigninClick} />
            <Footer footerNavbarHomeLink={"Home"} footerNavbarPracticumLink={"Practicum by Yandex"} />
        </div>
      );
}

export default Home;