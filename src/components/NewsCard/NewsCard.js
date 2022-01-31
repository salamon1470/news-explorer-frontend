import React from "react";
import moment from "moment";

function NewsCard(props) {
  const {article} = props;
 const [isHover, setIsHover] = React.useState(false);

 const date = moment(article.publishedAt).format('MMMM DD, YYYY');

  function handleBookmarkHover() {
    
        setIsHover(true);
        if (props.loggedIn) {
          setIsHover(false);
        }
   }

   function handleBookmarkLeave() {
        setIsHover(false);
   }

   
 const isMarked = article._id


  // 

    return (

          <li className={`news-card-list__item ${props.isListItemVisible ? "news-card-list__item_visible" : ""}`}>
            <img
              className="news-card-list__img"
              src={`${isMarked ? article.image : article.urlToImage}`}
              alt={article.title}
            />
            <div className="news-card-list__button-contanier" onMouseOver={handleBookmarkHover} onMouseLeave={handleBookmarkLeave}>
            <button
              aria-label=""
              type="button"
              className={`news-card-list__button ${isMarked ? "news-card-list__button_marked" : ""}`}
              onClick={() => { if(!isMarked) {
                props.onArticleAdd(article);
              }  else 
              props.onArticleDel(article);
            }
            }
            >
            </button>
            <button
              aria-label=""
              type="button"
              className={`news-card-list__button-hover ${isHover ? "news-card-list__button-hover_visible" : "news-card-list__button-hover"}`}
              onClick={props.onSigninClick}
            >
              Sign in to save articles
            </button>
            </div>
            <p className="news-card-list__date">{date}</p>
            <h3 className="news-card-list__title">{article.title}</h3>
            <p className="news-card-list__desctiption">{`${isMarked ? article.text : article.description}`}</p>
            <p className="news-card-list__source">{`${isMarked ? article.source : article.source.name}`}</p>
          </li>
    );
  }
  
  
  export default NewsCard;