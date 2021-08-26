import React from "react";

export const CardCommander = (mensaje) => {
  const [img, setImg] = React.useState([]);
  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const requestOptions = {};
    //img
    let avatarId = mensaje.nombre;
    let key = "?apikey=KMq9zenLRyX5Go";
    fetch("https://api.multiavatar.com/" + mensaje.nombre + ".svg" + key)
      .then((res) => res.text())
      .then((svg) => setImg(svg));

    //name
    console.log(img[0]);
  };
  //img[] to string
  let imgToString = img[mensaje.key_send];
  console.log(imgToString);
  return (
    <div className="cardCommander__container">
      <div className="cardCommander__img">
        <img src={imgToString} />
      </div>
      <div className="cardCommander__name">{mensaje.nombre}</div>
      <div className="cardCommander__description">{mensaje.contenido}</div>
    </div>
  );
};
