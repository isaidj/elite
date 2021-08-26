import React from "react";
const Contador = () => {
  const [numero, opNumero] = React.useState(0);

  const sumar = () => {
    opNumero(numero + 1);
  };
  const restar = () => {
    opNumero(numero - 1);
  };
  //   const escribir = () => {};
  //   opNumero(numero - 1);

  console.log(numero);

  return (
    <div>
      <h1 className={numero > 0 ? "menor" : "mayor"}>Contador: {numero}</h1>
      <button oncl> Aumentar</button>
      <button onClick={restar}>disminuir</button>
      <br />
      {/* <input
        onChange={escribir}
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Escribir numero"
      /> */}
    </div>
  );
};
export default Contador;
