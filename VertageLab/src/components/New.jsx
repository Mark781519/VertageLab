import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const initialData = { _id: null, input1: "", input2: "" };
const New = () => {
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="new">
      <p>Hello new Page</p>
      <form className="new_form" onSubmit={handleSubmit}>
        <input value="" onChange={() => {}}></input>
        <input value="" onChange={() => {}}></input>
        <button type="submit" className="form_button">
          Add New
        </button>
      </form>
    </div>
  );
};

export default New;
