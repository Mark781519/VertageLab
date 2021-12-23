import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import GradientForm from "./components/GradientForm";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/new" element={<GradientForm />} />
          <Route path="/edit/:id" element={<GradientForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
