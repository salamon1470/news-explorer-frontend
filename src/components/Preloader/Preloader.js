import React from "react";

function Preloader(props) {
  
    return (
        <section className={`preloader ${props.isPreloaderVisible ? "preloader_visible" : ""}`}>
            <i className="preloader__circle"></i>
            <p className="preloader__text">Searching for news...</p>
        </section>
    );
  }
  
  export default Preloader;