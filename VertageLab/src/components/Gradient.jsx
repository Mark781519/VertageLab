import { useDeleteGradient } from "../context/AppContext";
import { Link } from "react-router-dom";

const Gradient = ({ gradient }) => {
  const deleteGradient = useDeleteGradient();
  return (
    <div className="gradient">
      <input
        style={{
          background: `linear-gradient(${gradient.first}, ${gradient.second})`,
          width: "200px",
          height: "100px",
        }}
      />
      <button type="button">
        <Link to={`/edit/${gradient.id}`} className="ui">
          Edit
        </Link>
      </button>
      <button type="button" onClick={() => deleteGradient(gradient)}>
        Delete
      </button>
    </div>
  );
};

export default Gradient;
