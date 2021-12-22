import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="new">
      <NavLink to="/new" className="item">
        New
      </NavLink>
      <p>Hello Home Page </p>
    </div>
  );
};

export default Home;
