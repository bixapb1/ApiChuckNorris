import { ReactComponent as LinkSvg } from "../../assets/link.svg";
import { ReactComponent as EmptyHeart } from "../../assets/heart1.svg";
import { ReactComponent as Heart } from "../../assets/heart2.svg";
import { ReactComponent as Message } from "../../assets/message.svg";
import { useSelector, useDispatch } from "react-redux";
import { setFavoritesJokes } from "../../redux/action";
export default function Card({ style, joke }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorites = favorites.find((favoritesJoke) => {
    return favoritesJoke.id === joke.id;
  });
  function toLocalStorage(jokes) {
    localStorage.setItem("favoriteJokes", JSON.stringify(jokes));
  }
  function handlerFavoriteJoke() {
    if (isFavorites) {
      const newFavoriteJokes = favorites.filter((favoritesJoke) => {
        return favoritesJoke.id !== joke.id;
      });
      toLocalStorage([...newFavoriteJokes]);
      return dispatch(setFavoritesJokes([...newFavoriteJokes]));
    } else {
      toLocalStorage([...favorites, joke]);
      dispatch(setFavoritesJokes([...favorites, joke]));
    }
  }

  if (joke.categories) {
    return (
      <div className={style.card}>
        <div className={style.message}>
          <Message />
        </div>

        <div className={style.cardContainer}>
          <div className={style.heart} onClick={handlerFavoriteJoke}>
            {isFavorites ? <Heart /> : <EmptyHeart />}
          </div>
          <div className={style.cardId}>
            <span>ID:</span>
            <a href={`${joke.url}`}>
              {joke.id} <LinkSvg />
            </a>
          </div>
          <div className={style.cardText}>{joke.value}</div>
          <div className={style.cardFooter}>
            <div className={style.cardDate}>
              Last update: <span>{joke.updated_at.slice(0, 19)}</span>
            </div>
            {joke.categories.length !== 0 ? (
              <div className={style.cardJokeType}> {joke.categories}</div>
            ) : null}
          </div>
        </div>
      </div>
    );
  } else return null;
}
