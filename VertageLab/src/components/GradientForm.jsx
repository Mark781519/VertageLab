import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext, useSaveGradient } from "../context/AppContext";
import _find from "lodash/find";
import "../style/Form.css";

const setFormObj =
  (data, fn) =>
  ({ target }) => {
    const value = target.value;
    return fn({ ...data, [target.name]: value });
  };

const validate = (first, second) => {
  const isHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (isHex.test(first) && isHex.test(second)) {
    return true;
  } else {
    return false;
  }
};
const initialData = { id: null, first: "", second: "" };

const GradientForm = () => {
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();
  const { id } = useParams();

  const state = useAppContext();
  const saveGradient = useSaveGradient();
  const isActive = validate(data.first, data.second);

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
    <div className="form_box">
      <form className="gradient_form" onSubmit={handleSubmit}>
        <input
          type="text"
          data-testid="first"
          value={data.first}
          name="first"
          id="firstInput"
          onChange={setFormObj(data, setData)}
        ></input>
        <input
          type="text"
          data-testid="second"
          value={data.second}
          name="second"
          id="secondInput"
          onChange={setFormObj(data, setData)}
        ></input>
        <button
          type="submit"
          disabled={!isActive}
          className={isActive ? "form_button-active" : ""}
        >
          Add gradient
        </button>
      </form>
    </div>
  );
};

export default GradientForm;
