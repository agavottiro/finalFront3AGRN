import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {
  const { state, dispatch } = useContextGlobal();
  console.log(state);

  return (
    <div className="card">
      <img src="/public/images/doctor.jpg" alt="Doctor" className="card-img" />
      <h2>{dentist.name}</h2>
      <h3>{dentist.username}</h3>
      <Link to={`/dentist/${dentist.id}`}>Ver detalles</Link>
      <button
        className="favButton"
        onClick={() => dispatch({ type: "ADD_DESTACADOS", payload: dentist })}
      >
        Añadir a favoritos ⭐
      </button>
    </div>
  );
};

export default Card;
