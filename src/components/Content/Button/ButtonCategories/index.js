import style from "../ButtonCategories/style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../../../redux/action";
function Input({ category }) {
  const dispatch = useDispatch();
  return (
    <div className={style.caterogiesBtn}>
      <input
        id={category}
        type="radio"
        name="categoies"
        value={category}
        onInput={(e) => dispatch(setCategory(e.target.value))}
      />
      <label htmlFor={category}>{category}</label>
    </div>
  );
}

export default function Caterogies() {
  const categories = useSelector((state) => state.categories);
  return (
    <>
      <div className={style.caterogiesContainer}>
        {categories.map((category, index) => (
          <Input key={index} category={category} />
        ))}
      </div>
    </>
  );
}
