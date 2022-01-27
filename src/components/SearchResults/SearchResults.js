import NewsCardList from "../NewsCardList/NewsCardList"
function SearchResults(props) {
    
    return (
        <section className="search-results">
            <h3 className="search-results__title">Search results</h3>
            <NewsCardList />
            <button className="search-results__show-more">Show more</button>
        </section>
    )
}

export default SearchResults;