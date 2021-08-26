import React from "react";

const Menu = () => {
  return (
    <div>
      {/* <div className="menu-lateral">
        <a href="/#">HOME</a>
        <a href="/#">SQUADRON</a>
        <a href="/#">COMANDERS</a>
        <a href="/#">ABOUT US</a>
        <a href="/#">ABOUT US</a>
      </div> */}

      <div className="menu-container">
        <div className="menu">
          <h1>UROF</h1>

          <nav>
            <a href="#home">HOME</a>
            <a href="#welcome">DISCORD</a>
            <a href="#jugabilidad">WHAT WE DO</a>
            <a href="#comanders">COMANDERS</a>
            <a href="#effect">ABOUT US</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;
