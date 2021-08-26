// import logo from "./logo.svg";
import "./App.css";
import { Commanders } from "./components/Commanders";

// import Historia from "./components/Historia";
// import Anaconda from "./components/Anaconda";
import ImageSection from "./components/ImageSection";
import Jugabilidad from "./components/Jugabilidad";
import Menu from "./components/Menu";

import discordLogo from "./images/discord-logo.svg";

function App() {
  return (
    <div className="">
      <header className="header" id="home">
        <Menu />
        <div className="title">
          <h1>UNITED REPUBLIC OF LEGACY</h1>
        </div>
      </header>
      <body>
        <section>
          <div id="welcome" className="welcome">
            <h2>BIENVENIDO A EXPG</h2>
            <span className="span-line"></span>
            <h3>
              ¿Está buscando aventura y apoyo en una comunidad sólida? ¡Estás
              <br />
              aquí! Sin solicitud - sin citas obligatorias - edad mínima 16 años
            </h3>
            <div className="discord-container">
              <button className="btn-discord"> Unete a nosotros</button>

              <img className="discord__logo" src={discordLogo} alt="" />
            </div>
          </div>
        </section>
        <div>
          <ImageSection />
        </div>

        <div>
          <Jugabilidad />
        </div>
        <div>
          <Commanders />
        </div>
      </body>
    </div>
  );
}

export default App;
