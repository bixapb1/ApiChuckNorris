import {
  TYPESEARCH,
  CATEGORIES,
  CATEGORY,
  SEARCH,
  JOKES,
  FAVORITES,
  ERROR,
} from "./types";

const initStore = {
  typeSearch: "",
  categories: [],
  category: "",
  search: "",
  jokes: [],
  favorites: [],
  error: null,
};

export const jokeReducer = (state = initStore, action) => {
  switch (action.type) {
    case TYPESEARCH: {
      return { ...state, category: "", search: "", typeSearch: action.payload };
    }
    case CATEGORIES: {
      return { ...state, categories: action.payload };
    }
    case CATEGORY: {
      return { ...state, category: action.payload };
    }
    case SEARCH: {
      return { ...state, search: action.payload };
    }
    case JOKES: {
      return { ...state, jokes: action.payload };
    }
    case FAVORITES: {
      return { ...state, favorites: action.payload };
    }
    case ERROR: {
      return { ...state, jokes: [], error: action.payload };
    }
    default:
      return state;
  }
};
