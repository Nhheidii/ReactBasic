import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import TimeStopper from "./components/TimeStopper.jsx";
function App() {
  return (
    <>
      <Header />
      <Player />

      <div id="challenges">
        <TimeStopper title="Level1" targetTime={1} />
        <TimeStopper title="Level5" targetTime={5} />
        <TimeStopper title="Level10" targetTime={10} />
        <TimeStopper title="Level15" targetTime={15} />
      </div>
    </>
  );
}

export default App;
