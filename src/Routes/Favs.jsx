import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useContextGlobal();

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {state.favs.length === 0 ? (
          <p>La página de favoritos está vacía</p>
        ) : (
          state.favs.map((dentist) => (
            <div className="card" key={dentist.id}>
              <Card dentist={dentist} />
              <button
                className="buttons"
                onClick={() =>
                  dispatch({ type: "REMOVE_BY_ID", payload: dentist.id })
                }
              >
                Quitar de favoritos
              </button>
            </div>
          ))
        )}
      </div>
      {state.favs.length > 0 ? (
        <div className="buttonDelete">
          <button
            className="buttons"
            onClick={() => dispatch({ type: "REMOVE_ALL" })}
          >
            Limpiar todos los favoritos
          </button>
        </div>
      ) : (
        <div className="buttonDelete">
          <button className="buttons">
            <Link to="/">Ver dentistas</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default Favs;
