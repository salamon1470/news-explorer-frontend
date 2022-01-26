import React from "react";
import dog from "../../images/dog.png"
import lake from "../../images/lake.png"
import yellowstone from "../../images/yellowstone.png"

function NewsCard(props) {
 const [isHover, setIsHover] = React.useState(false);

  //   function handleBookmarkHover() {
      
  //     const bookmark = document.querySelectorAll(".news-card-list__button-contanier");
  //     bookmark.forEach(element => {
  //       element.addEventListener("mouseover", () => {
  //         setIsHover(true);
  //       })
  //     });
  //   }

  //   function handleBookmarkLeave() {

  //     const bookmark = document.querySelectorAll(".news-card-list__button-contanier");
  //     bookmark.forEach(element => {
  //       element.addEventListener("mouseleave", () => {
  //         setIsHover(false);
  //       })
  //     });
  //   }

    return (
        <>
          <li className="news-card-list__item">
            <img
              className="news-card-list__img"
              src={dog}
              alt={"A dog sitting on a log"}
            />
            <div className="news-card-list__button-contanier">
            <button
              aria-label=""
              type="button"
              className="news-card-list__button"
            >
            </button>
            <button
              aria-label=""
              type="button"
              className={`${isHover ? "news-card-list__button-hover_visible" : "news-card-list__button-hover"}`}
            >
              Sign in to save articles
            </button>
            </div>
            <p className="news-card-list__date">November 4, 2020</p>
            <h3 className="news-card-list__title">Everyone Needs a Special 'Sit Spot' in Nature</h3>
            <p className="news-card-list__desctiption">Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...</p>
            <p className="news-card-list__source">treehugger</p>
          </li>
          <li className="news-card-list__item">
            <img
              className="news-card-list__img"
              src={lake}
              alt={"A picture of a lake"}
            />
            <div className="news-card-list__button-contanier">
            <button
              aria-label=""
              type="button"
              className="news-card-list__button"
            >
            </button>
            <button
              aria-label=""
              type="button"
              className={`${isHover ? "news-card-list__button-hover_visible" : "news-card-list__button-hover"}`}
            >
              Sign in to save articles
            </button>
            </div>
            <p className="news-card-list__date">February 19, 2019</p>
            <h3 className="news-card-list__title">Nature makes you better</h3>
            <p className="news-card-list__desctiption">We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.</p>
            <p className="news-card-list__source">national geographic</p>
          </li>
          <li className="news-card-list__item">
            <img
              className="news-card-list__img"
              src={yellowstone}
              alt={"US national park"}
            />
            <div className="news-card-list__button-contanier">
            <button
              aria-label=""
              type="button"
              className="news-card-list__button"
            >
            </button>
            <button
              aria-label=""
              type="button"
              className="news-card-list__button-hover"
            >
              Sign in to save articles
            </button>
            </div>
            <p className="news-card-list__date">October 19, 2020</p>
            <h3 className="news-card-list__title">Nostalgic Photos of Tourists in U.S. National Parks</h3>
            <p className="news-card-list__desctiption">Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...</p>
            <p className="news-card-list__source">national geographic</p>
          </li>
        </>
    );
  }
  
  
  export default NewsCard;