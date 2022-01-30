import React, { useEffect } from "react";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import SigninPopup from "../SigninPopup/SigninPopup"
import SignupPopup from "../SignupPopup/SignupPopup";
import SearchResults from "../SearchResults/SearchResults";
import Preloader from "../Preloader/Preloader";
import ResultNotFound from "../ResultNotFound/ResultNotFound";
import SignupSuccess from "../SignupSuccess/SignupSuccess";
import newsapi from "../../utils/NewsApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainapi from "../../utils/MainApi";

function Home(props) {

    const [isSigninPopupOpen, setIsSigninPopupOpen] = React.useState(false);
    const [isSignupPopupOpen, setIsSignupPopupOpen] = React.useState(false);
    const [isSignupSuccessOpen, setIsSignupSuccessOpen] = React.useState(false);
    const [articles, setArticles] = React.useState([]);
    const [isNotFound, setIsNotFound] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});

    

    function handleSigninClick() {
      const headerPopup = document.querySelector(".popup-header");
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

    function handleSignupSuccess() {
      setIsSignupSuccessOpen(true);
      setIsSignupPopupOpen(false);
    }
      
    function closeAllPopups() {
      setIsSigninPopupOpen(false);
      setIsSignupPopupOpen(false);
      setIsSignupSuccessOpen(false);
    }

    // const results = document.querySelector(".search-results");
    // const preloader = document.querySelector(".preloader");
    // const notFound = document.querySelector(".result-not-found");
    // preloader.setAttribute("style", "display: block;");
    // results.setAttribute("style", "display: none;");


    function handleSearchSubmit(e) {
      e.preventDefault();
      const preloader = document.querySelector(".preloader");
      const results = document.querySelector(".search-results");
      const notFound = document.querySelector(".result-not-found");
      const searchInput = document.querySelector(".search__form-input").value;
      preloader.setAttribute("style", "display: block;");
      notFound.setAttribute("style", "display: none;");
      newsapi.getNews(searchInput)
      .then((res) => {
        preloader.setAttribute("style", "display: none;");
        results.setAttribute("style", "display: flex;");
        setArticles(res.articles);
        setIsNotFound(false);
        if ( res.articles.length === 0 ) {
          setIsNotFound(true);
          preloader.setAttribute("style", "display: none;");     
          results.setAttribute("style", "display: none;");
          notFound.setAttribute("style", "display: block;");
        }
        
      })
      .catch((err) => {
        if (err === "Error: 400") {
          preloader.setAttribute("style", "display: none;");     
          results.setAttribute("style", "display: none;");
          notFound.setAttribute("style", "display: block;")
        }
      });
    }

    useEffect(() => {
      mainapi.getUserInfo()
        .then((res) => {   
          setCurrentUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);


    let counter = 3;
    
    function handleOnShowMore() {
      const articlesToDisplay = Math.min(articles.length, counter+3);
      const listItem = document.querySelectorAll(".news-card-list__item");
      for (let i = counter; i < articlesToDisplay; i++) {
        listItem[i].setAttribute("style", "display: block;");
      }
      if (articlesToDisplay-counter !== 3) {
        const showMoreButton = document.querySelector(".search-results__show-more");
        showMoreButton.setAttribute("style", "display: none;");
      }
      counter = articlesToDisplay;
    }

    function handleArticleSave(article) {

      mainapi.addArticle(article)
      .then((res) => {
        setArticles([res.data, ...articles])
      })
      .catch((err) => {
        console.log(err);
      });
  } 
  
  function handleArticleDel(article) {
    mainapi.removeArticle(article._id)
    .then((newArticle) => {
      setArticles((state) => state.filter((c) => c._id !== article._id));
  })
  .catch((err) => {
    console.log(err);
  });
} 

function signOut() {
  localStorage.removeItem('jwt');
  props.setLoggedIn(false);
}

    
    return (
        <div className="home">
          <CurrentUserContext.Provider value={currentUser}>
            <Main
              onSigninClick={handleSigninClick}
              onSignOutClick={signOut}
              onSearchSubmit={handleSearchSubmit}
              loggedin={props.loggedIn}
            />
            <Preloader />
            <ResultNotFound isNotFound={isNotFound} />
            <SearchResults loggedIn={props.loggedIn} articles={articles} onShowMoreClick={handleOnShowMore}  onSigninClick={handleSigninClick} onArticleAdd={handleArticleSave} onArticleDel={handleArticleDel} />
            <About aboutTitle={"About the author"} 
            aboutDescription={"This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know. "} 
            aboutExpertise={"You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers."} />
            <SigninPopup  setLoggedIn={props.setLoggedIn} isOpen={isSigninPopupOpen} onClose={closeAllPopups} onSignupClick={handleSignupClick} />
            <SignupPopup isOpen={isSignupPopupOpen} onClose={closeAllPopups} onSigninClick={handleSigninClick} onSignupSuccess={handleSignupSuccess} /> 
            <SignupSuccess isOpen={isSignupSuccessOpen} onClose={closeAllPopups} onSigninClick={handleSigninClick} />
            <Footer footerNavbarHomeLink={"Home"} footerNavbarPracticumLink={"Practicum by Yandex"} />
          </CurrentUserContext.Provider>
        </div>
      );
}

export default Home;