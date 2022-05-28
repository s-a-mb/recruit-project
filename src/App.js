import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import RegistrationForm from "./components/Register/Register";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <div>
          <Welcome />
          <Login />
          <RegistrationForm />
        </div>
      </main>
    </div>
  );
}

export default App;
