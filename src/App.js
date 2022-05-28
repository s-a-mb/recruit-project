import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Welcome/Welcome";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <div>
          <Welcome />
        </div>
      </main>
    </div>
  );
}

export default App;
