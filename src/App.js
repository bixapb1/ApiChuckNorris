import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "./components/Content/index";
import Favorite from "./components/Favorite/index";
import { fetchCategoriesJoke, setToogle } from "./redux/action";
function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const { toogle } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchCategoriesJoke());
  }, [dispatch]);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    if (screenWidth >= 840) {
      dispatch(setToogle(screenWidth > 840));
    }
    if (screenWidth <= 840) {
      dispatch(setToogle(false));
    }
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [screenWidth, dispatch]);

  return (
    <div className="wrapper">
      <Content />
      {toogle && <Favorite />}
    </div>
  );
}

export default App;
