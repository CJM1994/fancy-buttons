import './App.css';

// Components
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightswitchButton from './components/LightswitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

function App(props) {
  return (
    <div className="App">
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightswitchButton />
        <TextRepeaterButton />
      </section>
    </div>
  );
};

export default App;
