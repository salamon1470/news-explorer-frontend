import React, { useEffect, useRef } from "react";
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
    const [isHeaderPopupOpen, setIsHeaderPopupOpen] = React.useState(false);
    const [isPreloaderVisible, setIsPreloaderVisible] = React.useState(false);
    const [isResultsVisible, setIsResultsVisible] = React.useState(false);
    const [isNotFoundVisible, setIsNotFoundVisible] = React.useState(false);
    const [itemListCounter, setItemListCounter] = React.useState(3)
    

    function handleSigninClick() {
        setIsSigninPopupOpen(true);
        setIsSignupPopupOpen(false);
        setIsSignupSuccessOpen(false);
        if (isHeaderPopupOpen === true) {
          setIsHeaderPopupOpen(false);
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

    function handleHeaderPopup() {
      setIsHeaderPopupOpen(true);
    }
      
    function closeAllPopups() {
      setIsSigninPopupOpen(false);
      setIsSignupPopupOpen(false);
      setIsSignupSuccessOpen(false);
      setIsHeaderPopupOpen(false);
    }

    const inputRef = useRef({});
    

    function handleSearchSubmit(e) {
      e.preventDefault();
      setIsPreloaderVisible(true);
      setIsNotFoundVisible(false);
      const searchInput = inputRef.current.value;
      newsapi.getNews(searchInput)
      .then((res) => {
        setIsPreloaderVisible(false);
        setIsResultsVisible(true);
        setArticles(res.articles);
        setIsNotFound(false);
        if ( res.articles.length === 0 ) {
          setIsNotFound(true);
          setIsPreloaderVisible(false);    
          setIsResultsVisible(false);
          setIsNotFoundVisible(true);
        }
        
      })
      .catch((err) => {
        if (err === "Error: 400") {
          setIsPreloaderVisible(false);     
          setIsResultsVisible(false);
          setIsNotFoundVisible(true);
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
    
    const listItem = useRef(null);

    function handleOnShowMore() {
      setItemListCounter(itemListCounter+3)
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
              isOpen={isHeaderPopupOpen}
              onClose={closeAllPopups}
              onMenuClick={handleHeaderPopup}
              inputRef={inputRef}
            />
            <Preloader isPreloaderVisible={isPreloaderVisible}/>
            <ResultNotFound isNotFoundVisible={isNotFoundVisible} isNotFound={isNotFound} />
            <SearchResults itemListCounter={itemListCounter} itemRef={listItem} isResultsVisible={isResultsVisible} loggedIn={props.loggedIn} articles={articles} onShowMoreClick={handleOnShowMore}  onSigninClick={handleSigninClick} onArticleAdd={handleArticleSave} onArticleDel={handleArticleDel} />
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