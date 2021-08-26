import React, { useRef } from "react";
// import anaconda from "./../images/anaconda.png";

function Anaconda() {
  //background move y when scroll

  const divRef = useRef();
  var bgY = 0;
  window.addEventListener("scroll", function () {
    bgY = (window.pageYOffset || document.documentElement.scrollTop) * -1;
    divRef.style.backgroundPositionY = bgY + "px";
  });

  return (
    <div>
      <div className="anaconda-container scroll-area">
        <div id="anaconda-img" ref={divRef}>
          {" "}
        </div>
      </div>
    </div>
  );
}

export default Anaconda;
