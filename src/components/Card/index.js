import { ReactComponent as LinkSvg } from "../../assets/link.svg";
import { ReactComponent as EmptyHeart } from "../../assets/heart1.svg";
import { ReactComponent as Heart } from "../../assets/heart2.svg";
import { ReactComponent as Message } from "../../assets/message.svg";
import { useSelector, useDispatch } from "react-redux";
import { setFavoritesJokes } from "../../redux/action";
export default function Card({ style, jokes }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const remove = favorites.find((joke) => {
    return joke.id === jokes.id;
  });
  function toLocalStorage(jokes) {
    localStorage.setItem("favoriteJokes", JSON.stringify(jokes));
  }
  function handlerFavoriteJoke() {
    if (remove) {
      const remove = favorites.filter((joke) => {
        return joke.id !== jokes.id;
      });
      toLocalStorage([...remove]);
      return dispatch(setFavoritesJokes([...remove]));
    } else {
      toLocalStorage([...favorites, jokes]);
      dispatch(setFavoritesJokes([...favorites, jokes]));
    }
  }

  if (jokes.categories) {
    return (
      <div className={style.card}>
        <div className={style.message}>
          <Message />
        </div>

        <div className={style.cardContainer}>
          <div className={style.heart} onClick={handlerFavoriteJoke}>
            {remove ? <Heart /> : <EmptyHeart />}
          </div>
          <div className={style.cardId}>
            <span>ID:</span>
            <a href={`${jokes.url}`}>
              {jokes.id} <LinkSvg />
            </a>
          </div>
          <div className={style.cardText}>{jokes.value}</div>
          <div className={style.cardFooter}>
            <div className={style.cardDate}>
              Last update: <span>{jokes.updated_at.slice(0, 19)}</span>
            </div>
            {jokes.categories.length !== 0 ? (
              <div className={style.cardJokeType}> {jokes.categories}</div>
            ) : null}
          </div>
        </div>
      </div>
    );
  } else return null;
}
