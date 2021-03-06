import NewsCard from "../NewsCard/NewsCard"

function NewsCardList(props) {

    return (
        <ul className="news-card-list" ref={props.itemRef}>
            {props.articles.map((article, index) => (
               <NewsCard isListItemVisible={ props.itemListCounter > index} articles={props.articles} onArticleAdd={props.onArticleAdd} onArticleDel={props.onArticleDel} loggedIn={props.loggedIn} article={article} key={index} onSigninClick={props.onSigninClick}/>    
            ))}
        </ul>
    )
}

export default NewsCardList;