import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

export const getDentists = async () => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

export const getDentistById = async (id) => {
  let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.data;
};

const ContextGlobal = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs"));
console.log(lsFavs);

let initialState = { darkTheme: false, favs: lsFavs || [] };

const contextReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DESTACADOS":
      if (state.favs.find((dentist) => dentist.id === action.payload.id)) {
        return state;
      }
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_BY_ID":
      let newFavs = state.favs.filter(
        (dentist) => dentist.id !== action.payload
      );
      return { ...state, favs: newFavs };
    case "REMOVE_ALL":
      return { ...state, favs: [] };
    case "CHANGE_THEME":
      return { ...state, darkTheme: !state.darkTheme };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  let data = { state, dispatch };
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={data}>{children}</ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
