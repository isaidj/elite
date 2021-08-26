import React, { useEffect, useState } from "react";

export const CardCommander = ({ key_send, nombre, contenido }) => {
  const [img, setImg] = useState([]);
  useEffect(() => {
    const getData = async () => {
      // const requestOptions = {};
      //img
      // let avatarId = mensaje.nombre;
      let key = "?apikey=KMq9zenLRyX5Go";
      fetch("https://api.multiavatar.com/" + nombre + ".svg" + key)
        .then((res) => res.text())
        .then((svg) => setImg(svg));

      //name
      console.log(img[0]);
    };
    getData();
  }, [img, nombre]);

  //img[] to string
  let imgToString = img[key_send];
  console.log(imgToString);
  return (
    <div className="cardCommander__container">
      <div className="cardCommander__img">
        <img src={imgToString} alt="avatar" />
      </div>
      <div className="cardCommander__name">{nombre}</div>
      <div className="cardCommander__description">{contenido}</div>
    </div>
  );
};
