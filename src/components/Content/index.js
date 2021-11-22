import { useDispatch, useSelector } from "react-redux";
import style from "../Content/style.module.css";
import Header from "./Header";
import TypeSearchBtn from "./ButtonTypeSearch/index";
import Caterogies from "./ButtonCategories/index";
import Search from "./SearchInput";
import Card from "../Card";
import {
  fetchRandomJoke,
  fetchCategoryJoke,
  fetchSearchJoke,
} from "../../redux/action";

export default function Main() {
  const dispatch = useDispatch();
  const { typeSearch, jokes, error } = useSelector((state) => state);

  function handlerBtnJoke() {
    if (typeSearch === "random") {
      dispatch(fetchRandomJoke());
    } else if (typeSearch === "caterogies") {
      dispatch(fetchCategoryJoke());
    } else if (typeSearch === "search") {
      dispatch(fetchSearchJoke());
    }
  }
  return (
    <>
      <div className={style.main}>
        <div className={style.container}>
          <Header />
          <TypeSearchBtn nameBtn={"random"} />
          <TypeSearchBtn nameBtn={"from caterogies"} value={"caterogies"} />
          {typeSearch === "caterogies" && <Caterogies />}
          <TypeSearchBtn nameBtn={"search"} />
          {typeSearch === "search" && <Search />}
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
