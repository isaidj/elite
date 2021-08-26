import React from "react";
const Prueba = () => {
  const [numero, setNumero] = React.useState(0);

  setInterval(() => {
    setNumero(numero + 1);
  }, 1500);
  return <h1>{numero}</h1>;
};
export default Prueba;
