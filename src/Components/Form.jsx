import React from "react";
import { useState } from "react";

const Form = () => {
  const [contacto, setContacto] = useState({
    name: "",
    email: "",
  });
  console.log(contacto);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacto.name.length <= 5 || !validateEmail(contacto.email)) {
      setError(true);
      setMessage("Por favor verifique su información nuevamente");
    } else {
      setError(false);
      setMessage(
        `Gracias ${contacto.name}, te contactaremos cuando antes vía mail`
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          onChange={(e) => setContacto({ ...contacto, name: e.target.value })}
        ></input>
        <label>Email: </label>
        <input
          type="text"
          onChange={(e) => setContacto({ ...contacto, email: e.target.value })}
        ></input>
        <button type="submit">Send</button>
      </form>
      {message}
    </div>
  );
};

export default Form;
