
import * as types from './types';

initialState = {
    news: [],
      };


export default function (state = initialState.news, action) {
    switch (action.type) {
    case types.SEARCH_ANY_NEWS_SUCCESS:
        return { ...state, articles: action.news.articles };
    case types.SEARCH_ANY_NEWS_ERROR:
        return { ...state }
    case types.SEARCH_TOP_NEWS_SUCCESS:
        return { ...state, articles: action.news.articles };
    case types.SEARCH_TOP_NEWS_ERROR:
        return { ...state }
    case types.SEARCH_SOURCES_NEWS_SUCCESS:
        return { ...state, articles: action.news.articles };
    case types.SEARCH_SOURCES_NEWS_ERROR:
        return { ...state }
    default:
        return state;
}
}