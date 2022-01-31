import NewsCardList from "../NewsCardList/NewsCardList"
function SearchResults(props) {
    
    return (
        <section className={`search-results ${props.isResultsVisible ? "search-results_visible" : ""}`}>
            <h3 className="search-results__title">Search results</h3>
            <NewsCardList itemListCounter={props.itemListCounter} itemRef={props.itemRef} onArticleAdd={props.onArticleAdd} onArticleDel={props.onArticleDel}  loggedIn={props.loggedIn} articles={props.articles}  onSigninClick={props.onSigninClick}/>
            <button className="search-results__show-more" onClick={props.onShowMoreClick}>Show more</button>
        </section>
    )
}

export default SearchResults;