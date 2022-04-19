import SavedNewsCard from "../SavedNewsCard/SavedNewsCard"

function SavedNewsCardList(props) {

    return (
        <ul className="saved-news-card-list">
            {props.articles.map((article, index) => (
               <SavedNewsCard onArticleDel={props.onArticleDel} articles={props.articles} article={article} key={index} onSigninClick={props.onSigninClick}/>    
            ))}   
        </ul>
    )
}

export default SavedNewsCardList;