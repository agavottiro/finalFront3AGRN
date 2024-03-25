import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

export const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  console.log(state.darkTheme);

  return (
    <div className={state.darkTheme ? "dark" : undefined}>
      <nav>
        <img src="/DH.ico" alt="Icono DH"></img>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/favs">Favoritos</Link>
        </ul>

        <button
          className="buttons"
          onClick={() => dispatch({ type: "CHANGE_THEME" })}
        >
          Cambiar tema
        </button>
      </nav>
      <Outlet />
    </div>
  );
};
