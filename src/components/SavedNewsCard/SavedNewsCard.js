import React from "react";
import moment from "moment";


function SavedNewsCard(props) {
  const {article} = props;
  const [isHover, setIsHover] = React.useState(false);
  
  const date = moment(article.date).format('MMMM DD, YYYY');

  function handleBookmarkHover() {
    
    setIsHover(true);
    if (props.loggedIn) {
      setIsHover(false);
    }
}

function handleBookmarkLeave() {
    setIsHover(false);
}

    return (

        <li className="saved-news-card-list__item">
        <img
          className="saved-news-card-list__img"
          src={article.image}
          alt={article.title}
        />
        <div className="saved-news-card-list__button-contanier" onMouseOver={handleBookmarkHover} onMouseLeave={handleBookmarkLeave}>
        <button
          aria-label=""
          type="button"
          className={`saved-news-card-list__button`}
        >
        </button>
        <button
          aria-label=""
          type="button"
          className={`saved-news-card-list__button-hover ${isHover ? "saved-news-card-list__button-hover_visible" : "saved-news-card-list__button-hover"}`}
          onClick={ () => {
            props.onArticleDel(article)
          }}
        >
          Remove from saved
        </button>
        </div>
        <p className="saved-news-card-list__keyword">{article.keyword}</p>
        <p className="saved-news-card-list__date">{date}</p>
        <h3 className="saved-news-card-list__title">{article.title}</h3>
        <p className="saved-news-card-list__desctiption">{article.text}</p>
        <p className="saved-news-card-list__source">{article.source}</p>
      </li>
    );
  }
  
  
  export default SavedNewsCard;