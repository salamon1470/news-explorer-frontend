import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList"

function SavedNewsCards(props) {

    return (
        <section className="saved-news-cards">
            <SavedNewsCardList onArticleDel={props.onArticleDel} articles={props.articles} />
        </section>
    )
}

export default SavedNewsCards;