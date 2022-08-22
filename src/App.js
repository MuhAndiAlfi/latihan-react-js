import { Link } from "react-router-dom"
import logo from './logo.svg'
import './App.css'
import './styles/style.css'

function App() {
  return (
    <div className="App-header">
      <h1 className="App">Halaman Utama!</h1>

      <nav>
        <Link to="/login" className="App-link">Login</Link> |{" "}
        <Link to="/register" className="App-link">Register</Link> |{" "}
        <Link to="/obat" className="App-link">List Obat</Link>
      </nav>
    </div>
  );
}

export default App
