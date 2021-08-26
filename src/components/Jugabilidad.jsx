import React from "react";
import TeamMissions from ".././images/TeamMissions.jpg";
import huevo from ".././images/huevo.jpg";

const Jugabilidad = () => {
  return (
    <div id="jugabilidad" className="jugabilidad">
      <div className="teamMissions">
        <img src={TeamMissions} alt="TeamMissions"></img>
        <div>
          <h2 className="h2-jugabilidad">TEAM MISSIONS</h2>
          <span className="span-line-right"></span>
          <h5 className="h5-jugabilidad">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here,{" "}
          </h5>
        </div>
      </div>

      <div className="exploration">
        <img src={huevo} alt="huevo"></img>
        <div>
          <h2 className="h2-jugabilidad">EXPLORATION</h2>
          <span className="span-line-left"></span>
          <h5 className="h5-jugabilidad">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem The standard
            chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
            Bonorum et Malorum"
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Jugabilidad;
