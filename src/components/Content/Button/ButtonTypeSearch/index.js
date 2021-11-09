import style from "../ButtonTypeSearch/style.module.css";
import { useDispatch } from "react-redux";
import { setTypeSearch } from "../../../../redux/action";
export default function TypeSearchBtn({ nameBtn, value }) {
  const dispatch = useDispatch();
  return (
    <div className={style.bodyTypeSearch}>
      <input
        type="radio"
        className={style.typeSearch}
        name="typeSearch"
        value={value ? value : nameBtn}
        onInput={(event) => {
          dispatch(setTypeSearch(event.target.value));
        }}
      />
      <label
        htmlFor={value ? value : nameBtn}
        className={style.typeSearchLabel}
      >
        {nameBtn}
      </label>
    </div>
  );
}
