import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import GradientForm from "./components/GradientForm";
import "./style/App.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new" element={<GradientForm />} />
        <Route path="/edit/:id" element={<GradientForm />} />
      </Routes>
    </div>
  );
};

export default App;
