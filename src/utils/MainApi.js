export const customFetch = (url, headers) =>
    fetch(url, headers)
    .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))

class MainApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getUserInfo() {
        return customFetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
    }

    getArticles() {
        return customFetch(`${this._baseUrl}/articles`, {
            headers: this._headers
        })
    }

    addArticle(article) {
        const searchInput = document.querySelector(".search__form-input").value;
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        const searchCap = capitalizeFirstLetter(searchInput);
        return customFetch(`${this._baseUrl}/articles`, {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify({
                keyword: searchCap,
                title: article.title,
                text: article.description,
                date: article.publishedAt,
                source: article.source.name,
                link: article.url,
                image: article.urlToImage,
            })
        })

    }

    removeArticle(articleId) {
        return customFetch(`${this._baseUrl}/articles/${articleId}`, {
            headers: this._headers,
            method: "DELETE"
        })
    }

    register ( email, password, name ) {
        return customFetch(`${this._baseUrl}/signup`, {
          headers: this._headers,
          method: 'POST',
          body: JSON.stringify( {email, password, name} )
        })
      };

    login(email, password) {
        return customFetch(`${this._baseUrl}/signin`, {
          headers: this._headers,
          method: 'POST',
          body: JSON.stringify({email, password})
        })
      };

    checkToken(token) {
        return customFetch(`${this._baseUrl}/users/me`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        })
      };

}
const jwt = localStorage.getItem('jwt');

const mainapi = new MainApi({
    baseUrl: "https://api.finalnewssg.students.nomoreparties.sbs",
    headers: {
        authorization: `Bearer ${jwt}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default mainapi;