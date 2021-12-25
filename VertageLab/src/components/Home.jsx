import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Gradient from "./Gradient";

const Home = () => {
  const state = useAppContext();
  return (
    <div className="home">
      {state.gradients.length > 0
        ? state.gradients.map((el) => <Gradient key={el.id} gradient={el} />)
        : null}
      <NavLink to="/new" className="new_item">
        <div className="gradient">
          <p className="plus">+</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
