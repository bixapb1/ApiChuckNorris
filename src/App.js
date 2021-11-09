import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Content from "./components/Content/index";
import Favorite from "./components/Favorite/index";
import { fetchCategoriesJoke } from "./redux/action";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesJoke());
  }, [dispatch]);
  return (
    <div className="wrapper">
      <Content />
      <Favorite />
    </div>
  );
}

export default App;
