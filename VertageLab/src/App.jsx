import { Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";
import Home from "./components/Home";
import New from "./components/New";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
