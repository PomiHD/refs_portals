import Player from "./components/Player";
import TimerChallenger from "./components/TimerChallenger";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenger title="Easy" targetTime={1} />
        <TimerChallenger title="Medium" targetTime={3} />
        <TimerChallenger title="Hard" targetTime={10} />
        <TimerChallenger title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
