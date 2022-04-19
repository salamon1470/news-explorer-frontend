import React from "react";
import glass from "../../images/not-found_v1.png"

function ResultNotFound(props) {

    return (
    <section className={`result-not-found ${props.isNotFoundVisible ? "result-not-found_visible" : ""}`}>
        <img src={glass} alt="404 Magnifying glass" className="result-not-found__image"></img>
        <h2 className="result-not-found__title">{`${props.isNotFound? "Nothing found" : ""}`}</h2>
        <p className="result-not-found__message">{`${props.isNotFound? "Sorry, but nothing matched your search terms." : "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."}`}</p>
    </section>
    )
}

export default ResultNotFound;