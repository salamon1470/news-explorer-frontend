
function Search(props) {


  return (
    <section className="search" onSubmit={props.onSearchSubmit}>
      <h1 className="search__title">{props.searchTitle}</h1>
      <p className="search__subtitle">{props.searchSubtitle}</p>
      <form name="query" id="search-form" className="search__form">
          <input ref={props.inputRef} id="search-form-input" className="search__form-input" placeholder={props.searchPlaceholder}></input>
          <button className="search__form-button">{props.searchButtonText}</button>
      </form> 
    </section>
  );
}

export default Search;