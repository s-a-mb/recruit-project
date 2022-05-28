import Header from "./components/Welcome/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ViewProfile from "./components/View Profile/ViewProfile";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/viewprofile" element={<ViewProfile />} />
            </Routes>
          </Router>
        </div>
      </main>
    </div>
  );
}

export default App;
