import style from "../Favorite/style.module.css";
import Card from "../Card/index";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFavoritesJokes } from "../../redux/action";
export default function Favorite() {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state);
  useEffect(() => {
    const favoriteStorage = JSON.parse(localStorage.getItem("favoriteJokes"));
    if (favoriteStorage) {
      dispatch(setFavoritesJokes(favoriteStorage));
    }
  }, [dispatch]);

  return (
    <>
      <div className={style.favorite}>
        <div className={style.container}>
          <div className={style.title}> Favorite </div>
          {favorites.map((joke) => {
            return <Card key={joke.id} joke={joke} style={style} />;
          })}
        </div>
      </div>
    </>
  );
}
