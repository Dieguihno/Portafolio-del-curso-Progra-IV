import logo from './boton.png';
import './App.css';

function App(props) {
  return (
    <div className="App"> {/* jsx */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hola Mundo.
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.name}
        </a>
      </header>
    </div>
  );
}

export default App;
