import React from "react";
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { getDentists } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let dentistsData = await getDentists();
      setDentists(dentistsData);
    };
    getData();
  }, []);

  return (
    <main>
      <h1>Home</h1>
        <div className="card-grid">
          {dentists.map((dentist) => {
            return <Card dentist={dentist} key={dentist.id} />;
          })}
      </div>
    </main>
  );
};

export default Home;
