import {
  TYPESEARCH,
  CATEGORIES,
  CATEGORY,
  SEARCH,
  JOKES,
  FAVORITES,
  ERROR,
} from "./types";

export function setTypeSearch(type) {
  return { type: TYPESEARCH, payload: type };
}

export function setCategories(category) {
  return { type: CATEGORIES, payload: category };
}
export function setCategory(category) {
  return { type: CATEGORY, payload: category };
}
export function setSearch(text) {
  return { type: SEARCH, payload: text };
}
export function setJokes(joke) {
  return { type: JOKES, payload: joke };
}
export function setFavoritesJokes(joke) {
  return { type: FAVORITES, payload: joke };
}
export function setError(error) {
  return { type: ERROR, payload: error };
}

export function fetchCategoriesJoke() {
  return async (dispatch) => {
    const url = `https://api.chucknorris.io/jokes/categories`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch(setCategories(json));
  };
}
export function fetchRandomJoke() {
  return async (dispatch) => {
    const url = `https://api.chucknorris.io/jokes/random`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch(setError(null));
    dispatch(setJokes(json));
  };
}
export function fetchCategoryJoke() {
  return async (dispatch, getState) => {
    const category = getState().category;
    if (!category) {
      dispatch(setError("You have not selected a joke category!"));
    } else {
      const url =
        `https://api.chucknorris.io/jokes/random?category=` + category;
      const response = await fetch(url);
      const json = await response.json();
      dispatch(setError(null));
      dispatch(setJokes(json));
    }
  };
}
export function fetchSearchJoke() {
  return async (dispatch, getState) => {
    const search = getState().search;
    if (search.length < 3 || search.length > 120) {
      dispatch(setError("Line length must be between 3 and 120!"));
    } else {
      const url = `https://api.chucknorris.io/jokes/search?query=` + search;
      const response = await fetch(url);
      const json = await response.json();
      if (json.result.length === 0) {
        dispatch(
          setError(
            "No results were found for your search. Try searching again!"
          )
        );
      } else {
        dispatch(setError(null));
        dispatch(setJokes(json));
      }
    }
  };
}
