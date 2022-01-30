import NewsCardList from "../NewsCardList/NewsCardList"
function SearchResults(props) {
    
    return (
        <section className="search-results">
            <h3 className="search-results__title">Search results</h3>
            <NewsCardList  onArticleAdd={props.onArticleAdd} onArticleDel={props.onArticleDel}  loggedIn={props.loggedIn} articles={props.articles}  onSigninClick={props.onSigninClick}/>
            <button className="search-results__show-more" onClick={props.onShowMoreClick}>Show more</button>
        </section>
    )
}

export default SearchResults;