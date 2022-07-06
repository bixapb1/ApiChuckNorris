import { useDispatch, useSelector } from "react-redux";
import style from "../Content/style.module.css";
import TypeSearchBtn from "../Button/ButtonTypeSearch/index";
import Caterogies from "../Button/ButtonCategories/index";
import Search from "../Button/SearchInput/index";
import Card from "../Card/index";
import {
  fetchRandomJoke,
  fetchCategoryJoke,
  fetchSearchJoke,
  setToogle,
  setError,
} from "../../redux/action";

export default function Main() {
  const dispatch = useDispatch();
  const { typeSearch, jokes, error, searchError, categoriesError, toogle } =
    useSelector((state) => state);

  function handlerBtnJoke() {
    if (typeSearch === "random") {
      dispatch(fetchRandomJoke());
    } else if (typeSearch === "caterogies") {
      dispatch(fetchCategoryJoke());
    } else if (typeSearch === "search") {
      dispatch(fetchSearchJoke());
    } else dispatch(setError("You have not selected a joke!"));
  }
  return (
    <>
      {toogle && <div className={style.bgToogle}></div>}
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.logo}>
            <span>Chuck Norris Jokes</span>{" "}
            <span
              className={style.toogle}
              onClick={() => dispatch(setToogle(!toogle))}
            >
              Favorite
            </span>
          </div>
          <div className={style.title}>Hey!</div>
          <div className={style.subtitle}>
            Let’s try to find a joke for you:
          </div>
          <TypeSearchBtn nameBtn={"random"} />
          <TypeSearchBtn nameBtn={"from caterogies"} value={"caterogies"} />
          {typeSearch === "caterogies" && <Caterogies />}
          <div className={style.error}>{categoriesError}</div>
          <TypeSearchBtn nameBtn={"search"} />
          {typeSearch === "search" && <Search />}
          <div className={style.error}>{searchError}</div>
          <button onClick={handlerBtnJoke} className={style.btn}>
            Get a joke
          </button>
          {jokes.result ? (
            jokes.result.map((joke) => {
              return <Card key={joke.id} joke={joke} style={style} />;
            })
          ) : (
            <Card joke={jokes} style={style} />
          )}
          <div className={style.error}>{error}</div>
        </div>
      </div>
    </>
  );
}
