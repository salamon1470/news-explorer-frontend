import React from "react";
import dog from "../../images/dog.png"
import lake from "../../images/lake.png"
import yellowstone from "../../images/yellowstone.png"
import teton from "../../images/teton.png"
import sky from "../../images/sky.png"

function SavedNewsCard() {

    return (
        <>
          <li className="saved-news-card-list__item">
            <img
              className="saved-news-card-list__img"
              src={dog}
              alt={"A dog sitting on a log"}
            />
            <button
              aria-label=""
              type="button"
              className="saved-news-card-list__button"
            >
            </button>
            <p className="saved-news-card-list__date">November 4, 2020</p>
            <h3 className="saved-news-card-list__title">Everyone Needs a Special 'Sit Spot' in Nature</h3>
            <p className="saved-news-card-list__desctiption">Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...</p>
            <p className="saved-news-card-list__source">treehugger</p>
          </li>
          <li className="saved-news-card-list__item">
            <img
              className="saved-news-card-list__img"
              src={lake}
              alt={"A picture of a lake"}
            />
            <button
              aria-label=""
              type="button"
              className="saved-news-card-list__button"
            >
            </button>
            <p className="saved-news-card-list__date">February 19, 2019</p>
            <h3 className="saved-news-card-list__title">Nature makes you better</h3>
            <p className="saved-news-card-list__desctiption">We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.</p>
            <p className="saved-news-card-list__source">national geographic</p>
          </li>
          <li className="saved-news-card-list__item">
            <img
              className="saved-news-card-list__img"
              src={yellowstone}
              alt={"US national park"}
            />
            <button
              aria-label=""
              type="button"
              className="saved-news-card-list__button"
            >
            </button>
            <p className="saved-news-card-list__date">October 19, 2020</p>
            <h3 className="saved-news-card-list__title">Nostalgic Photos of Tourists in U.S. National Parks</h3>
            <p className="saved-news-card-list__desctiption">Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...</p>
            <p className="saved-news-card-list__source">national geographic</p>
          </li>
          <li className="saved-news-card-list__item">
            <img
              className="saved-news-card-list__img"
              src={teton}
              alt={"A moose in a field"}
            />
            <button
              aria-label=""
              type="button"
              className="saved-news-card-list__button"
            >
            </button>
            <p className="saved-news-card-list__date">November 4, 2020</p>
            <h3 className="saved-news-card-list__title">Grand Teton Renews Historic Crest Trail</h3>
            <p className="saved-news-card-list__desctiption">“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...</p>
            <p className="saved-news-card-list__source">National parks traveler</p>
          </li>
          <li className="saved-news-card-list__item">
            <img
              className="saved-news-card-list__img"
              src={sky}
              alt={"A starry night"}
            />
            <button
              aria-label=""
              type="button"
              className="saved-news-card-list__button"
            >
            </button>
            <p className="saved-news-card-list__date">March 16, 2020</p>
            <h3 className="saved-news-card-list__title">Scientists Don't Know Why Polaris Is So Weird </h3>
            <p className="saved-news-card-list__desctiption">Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them. </p>
            <p className="saved-news-card-list__source">treehugger</p>
          </li>
        </>
    );
  }
  
  
  export default SavedNewsCard;