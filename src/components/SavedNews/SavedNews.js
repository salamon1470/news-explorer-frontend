import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNews(props) {

    const currentUser = React.useContext(CurrentUserContext)

    const art = Array.from(props.articles.map((article) => article.keyword)) 

    return (
        <section className="saved-news">
            <p className="saved-news__saved-articles-tag">Saved articles</p>
            <h2 className="saved-news__title">{`${currentUser.name}, you have ${props.articles.length} saved articles`}</h2>
            <p className="saved-news__keywords">By keywords: <span className="saved-news__keywords-span">{art.length > 3 ? art[0] + ', ' + art[1] + ', ' + `and ${art.length - 2} other`: `${art.length === 2 ? art[0] + ', ' + art[1] : `${art.length === 1 ? art[0] : ""}`}`} </span></p>
        </section>
    )
};

export default SavedNews;