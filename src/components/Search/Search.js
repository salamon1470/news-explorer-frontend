
function Search(props) {

  return (
    <section className="search">
      <h1 className="search__title">{props.searchTitle}</h1>
      <p className="search__subtitle">{props.searchSubtitle}</p>
      <div className="search__form">
          <input className="search__form-input" placeholder={props.searchPlaceholder}></input>
          <button className="search__form-button" onClick={props.onSearchSubmit}>{props.searchButtonText}</button>
      </div> 
    </section>
  );
}

export default Search;