import React from "react";
import Modal from "react-modal";

import window from ".././images/window.png";
import anillo from ".././images/anillo.png";
import robert from ".././images/robert.jpg";
import mineria from ".././images/mineria.jpg";

const ImageSection = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [imgName, setImgName] = React.useState("");

  function abrirModal(name) {
    setIsOpen(true);
    setImgName(name);
  }
  function cerrarModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="image-section">
        <div
          onClick={abrirModal.bind(this, window)}
          className="image-container"
        >
          <img src={window} alt="window" />
        </div>

        <div
          onClick={abrirModal.bind(this, robert)}
          className="image-container"
        >
          <img src={robert} alt="robert" />
        </div>
        <div
          onClick={abrirModal.bind(this, anillo)}
          className="image-container"
        >
          <img src={anillo} alt="anillo" />
        </div>
        <div
          onClick={abrirModal.bind(this, mineria)}
          className="image-container"
        >
          <img src={mineria} alt="mineria" />
        </div>
      </div>

      <Modal
        id="myModal"
        className="modals"
        ariaHideApp={false}
        isOpen={isOpen}
      >
        <span onClick={cerrarModal} className="close-modal">
          x
        </span>
        <img src={imgName} alt="imagename" />
      </Modal>
    </div>
  );
};

export default ImageSection;
