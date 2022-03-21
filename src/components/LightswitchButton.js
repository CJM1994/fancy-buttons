import React, { useState } from "react";

const LightswitchButton = () => {

  const [light, setLight] = useState(0);

  const handleClick = () => {
    if (light === 0) {
      setLight(1);
    }
    else {
      setLight(0);
    };
  };

  return (
    <button onClick={handleClick} className="LightswitchButton">
      {light === 1 && <span><i>💡</i> I'm on!</span>}
      {light === 0 && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );

};

export default LightswitchButton;