import React from "react";

import { CardCommander } from "./CardCommander";

export const Commanders = () => {
  const [img, setImg] = React.useState([]);
  const [perfil, setPerfil] = React.useState([]);

  /*function called componetDidMount()*/
  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const requestOptions = {};

    //name
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPerfil(data));
  };

  return (
    <div className="bg__commanders">
      <div className="frame__commanders">
        <div className="frame__menu__comanders">
          <div className="filter">
            <label>Search by:</label>
            <br />
            <button className="btn__rank">R</button>
            <button className="btn__rank">Ro</button>
          </div>
          <div className="frame__menu__comanders__search">
            <label>Names:</label>
            <br />
            <input type="text" name="" id="" />
            <button>Search</button>
            <button>Reset</button>
          </div>
        </div>
        <div className="commanders__container">
          {perfil.map((item) => (
            <CardCommander
              key={item.id}
              key_send={item.id}
              nombre={item.username}
              contenido="loremipsum dolor sit amet"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// var myHeaders = new Headers();
// myHeaders.append("key", "7of7p245sescgskwo80o44c8k440ckcggkos0s0");
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   header: {
//     appName: "EliteTecnology",
//     appVersion: "1.01",
//     isDeveloped: true,
//     APIkey: "7of7p245sescgskwo80o44c8k440ckcggkos0s0",
//   },
//   events: [
//     {
//       eventCustomID: 13458,
//       eventName: "getCommanderProfile",
//       eventTimestamp: "2022-04-08T17:30:49Z",
//       eventData: {
//         searchName: "Szpecktor",
//       },
//     },
//   ],
// });

// var requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow",
// };

// fetch("https://inara.cz/inapi/v1/", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

// const requestOptions = {
//   header: {
//     appName: "EliteTecnology",
//     appVersion: "1.01",
//   },
//   events: [
//     {
//       eventCustomID: 13458,
//       eventName: "getCommanderProfile",
//       eventTimestamp: "2022-04-08T17:30:49Z",
//       eventData: {
//         searchName: "Szpecktor",
//       },
//     },
//   ],
// };

// fetch("https://inara.cz/inapi/v1/", requestOptions)
//   .then((response) => response.json())
//   .then((data) => setPerfil(data));
