import style from "../Favorite/style.module.css";
import Card from "../Card/index";
import { useSelector } from "react-redux";
export default function Favorite() {
  const favorites = useSelector((state) => state.favorites);
  return (
    <>
      <div className={style.favorite}>
        <div className={style.container}>
          <div className={style.title}>Favorite</div>
          {favorites.map((joke) => {
            return <Card key={joke.id} jokes={joke} style={style} />;
          })}
        </div>
      </div>
    </>
  );
}
