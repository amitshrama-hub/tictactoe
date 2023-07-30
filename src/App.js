import logo from "./logo.svg";
import "./App.css";
import "./components/Board";
import Board from "./components/Board";
// import Button from './components/Button';

function App() {
  return (
    <div className="app">
      <h1 id="heading">TIC TAC TOE</h1>
      <Board />
      {/* <Button /> */}
    </div>
  );
}

export default App;
