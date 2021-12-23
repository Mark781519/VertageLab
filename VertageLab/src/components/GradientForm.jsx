import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext, useSaveGradient } from "../context/AppContext";
import _find from "lodash/find";

const setFormObj =
  (data, fn) =>
  ({ target }) => {
    const value = target.value;
    return fn({ ...data, [target.name]: value });
  };
const initialData = { id: null, first: "", second: "" };

const GradientForm = () => {
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();
  const { id } = useParams();

  const state = useAppContext();
  const saveGradient = useSaveGradient();

  useEffect(() => {
    const gradient = _find(state.gradients, { id }) || {};
    if (gradient.id && gradient.id !== data.id) {
      setData(gradient);
    }
    if (!gradient.id && data.id) {
      setData(initialData);
    }
  }, [data.id, id, state.gradients]);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveGradient(data);
    navigate("/");
  };

  return (
    <div className="new">
      <p>Hello new Page</p>
      <form className="new_form" onSubmit={handleSubmit}>
        <input
          value={data.first}
          name="first"
          onChange={setFormObj(data, setData)}
        ></input>
        <input
          value={data.second}
          name="second"
          onChange={setFormObj(data, setData)}
        ></input>
        <button type="submit" className="form_button">
          Save
        </button>
      </form>
    </div>
  );
};

export default GradientForm;
