import React, { useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainapi from "../../utils/MainApi";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import SavedNewsCards from "../SavedNewsCards/SavedNewsCards";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNewsHome(props) {

    const [articles, setArticles] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState({});

    useEffect(() => {
        mainapi.getUserInfo()
          .then((res) => {   
            setCurrentUser(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    
      useEffect(() => {
        mainapi.getArticles()
        .then((res) => {
          setArticles(res.data);
        })
      }, [])
  
    function handleArticleDel(article) {
      mainapi.removeArticle(article._id)
      .then((newArticle) => {
        setArticles((state) => state.filter((c) => c._id !== article._id));
    })
    .catch((err) => {
      console.log(err);
    });
  }
    return (
        <CurrentUserContext.Provider value={currentUser}> 
        <SavedNewsHeader
          savedNewsLogoText={"NewsExplorer"}
          savedNewsHomeLink={"/home"}
          headerHomeLinkText={"Home"}
          savedNewsSavedLink={"/saved-news"}
          savedNewsSavedLinkText={"Saved Articles"}
          setLoggedIn={props.setLoggedIn}
        />
        <SavedNews articles={articles}/>
        <SavedNewsCards articles={articles} onArticleDel={handleArticleDel} />
        <Footer
          footerNavbarHomeLink={"Home"}
          footerNavbarPracticumLink={"Practicum by Yandex"}
        />
      </CurrentUserContext.Provider>
    )
}

export default SavedNewsHome;