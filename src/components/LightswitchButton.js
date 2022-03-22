import React, { useState } from "react";

const LightswitchButton = (props) => {

  const { light, setLight, switchLight } = props;

  return (
    <button onClick={switchLight} className="LightswitchButton">
      {light === 1 && <span><i>💡</i> I'm on!</span>}
      {light === 0 && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );

};

export default LightswitchButton;