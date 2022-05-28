import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <div>
          <Welcome />
          <Login />
        </div>
      </main>
    </div>
  );
}

export default App;
