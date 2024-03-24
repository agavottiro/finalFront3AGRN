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
          <Link to="/contacto">Contact</Link>
          <Link to="/favs">Favs</Link>
        </ul>

        <button
          className="buttons"
          onClick={() => dispatch({ type: "CHANGE_THEME" })}
        >
          Change theme
        </button>
      </nav>
      <Outlet />
    </div>
  );
};
