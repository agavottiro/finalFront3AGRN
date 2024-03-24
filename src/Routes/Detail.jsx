import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDentistById } from "../Components/utils/global.context";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentistSelected, setDentistSelected] = useState({});

  const { state, dispatch } = useContextGlobal();
  console.log(state);

  useEffect(() => {
    const getData = async () => {
      let dentistData = await getDentistById(id);
      setDentistSelected(dentistData);
    };
    getData();
  }, [id]);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <div className="details">
        <h1>Detail Dentist id </h1>
        <div className="card-details">
          <img
            src="/public/images/doctor.jpg"
            alt="Doctor"
            className="card-img"
          />
          <h2>{dentistSelected.name}</h2>
          <h3>{dentistSelected.email}</h3>
          <h3>{dentistSelected.phone}</h3>
          <a href={dentistSelected.website}>Website</a>
          <button className="favButton" onClick={()=> dispatch( {type:"ADD_DESTACADOS", payload: dentistSelected } )}>⭐</button>
        </div>
      </div>
    </>
  );
};

export default Detail;
