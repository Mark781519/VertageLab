import { useDeleteGradient } from "../context/AppContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../style/Gradient.css";

const Gradient = ({ gradient }) => {
  const deleteGradient = useDeleteGradient();
  return (
    <div className="gradient">
      <div className="hex-values">
        <input
          data-testid="firstInput"
          className="gradientInput"
          value={gradient.first}
          readOnly
        />
        <input
          data-testid="secondInput"
          className="gradientInput"
          value={gradient.second}
          readOnly
        />
      </div>
      <input
        className="linerGradien"
        style={{
          background: `linear-gradient(${gradient.first}, ${gradient.second})`,
        }}
      />
      <div className="gradient_buttons">
        <Link className="edit" to={`/edit/${gradient.id}`}>
          <button className="edit_button">Edit</button>
        </Link>
        <button
          className="delete_button"
          type="button"
          onClick={() => deleteGradient(gradient)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

Gradient.propTypes = {
  gradient: PropTypes.shape({
    id: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    second: PropTypes.string.isRequired,
  }).isRequired,
};

export default Gradient;
