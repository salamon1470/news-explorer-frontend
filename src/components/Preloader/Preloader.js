import React from "react";

function Preloader() {
  
    return (
        <section className="preloader">
            <i className="preloader__circle"></i>
            <p className="preloader__text">Searching for news...</p>
        </section>
    );
  }
  
  export default Preloader;