import './App.css';
import React, { useState } from 'react';

// Components
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightswitchButton from './components/LightswitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

function App() {

  const [light, setLight] = useState(0);
  const switchLight = () => { setLight(light ? 0 : 1) };
  const dark = light ? '' : 'dark';

  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightswitchButton light={light} setLight={setLight} switchLight={switchLight} />
        <TextRepeaterButton />
      </section>
    </div>
  );
};

export default App;
