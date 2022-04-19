import { customFetch } from "./MainApi";

const date = new Date();
const currentDate = date.getDate();
const weekBefore = date.getDate() - 7;

class NewsApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }


    getNews(searchInput) {
        return customFetch(`${this._baseUrl}/v2/everything?q=${searchInput}&from=${weekBefore}&to=${currentDate}}&pageSize=100&apiKey=780fac2aa16041b7be72d0512cd0d616`)
    }

}

const newsapi = new NewsApi({
    baseUrl: "https://nomoreparties.co/news"
});

export default newsapi;