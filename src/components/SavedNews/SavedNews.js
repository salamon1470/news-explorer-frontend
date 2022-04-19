import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNews(props) {

    const currentUser = React.useContext(CurrentUserContext)

    const art = Array.from(props.articles.map((article) => article.keyword))
    
    const newArray = {};

    for (const items of art) {
        if (!newArray[items]) {
            newArray[items] = 0;
        }
        newArray[items] += 1;
    }

    const items = Object.keys(newArray).map(key => {
        return [key, newArray[key]];
    });

    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    const savedArr = items.slice(0, 2).map((value) => value[0]);


    return (
        <section className="saved-news">
            <p className="saved-news__saved-articles-tag">Saved articles</p>
            <h2 className="saved-news__title">{`${currentUser.name}, you have ${props.articles.length} saved articles`}</h2>
            <p className="saved-news__keywords">By keywords: <span className="saved-news__keywords-span">{items.length > 3 ? savedArr + ', ' + `and ${items.length - 2} other`: `${art.length === 2 ? art[0] + ', ' + art[1] : `${art.length === 1 ? art[0] : ""}`}`} </span></p>
        </section>
    )
};

export default SavedNews;