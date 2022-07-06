import style from "../SearchInput/style.module.css";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../redux/action";
export default function Search() {
  const dispatch = useDispatch();
  return (
    <div className={style.box}>
      <input
        onInput={(e) => {
          dispatch(setSearch(e.target.value));
        }}
        type="search"
        placeholder="Free text search..."
      />
    </div>
  );
}
