import React from "react";
import glass from "../../images/not-found_v1.png"

function ResultNotFound() {

    return (
    <section className="result-not-found">
        <img src={glass} alt="404 Magnifying glass" className="result-not-found__image"></img>
        <h2 className="result-not-found__title">Nothing found</h2>
        <p className="result-not-found__message">Sorry, but nothing matched 
your search terms.</p>
    </section>
    )
}

export default ResultNotFound;