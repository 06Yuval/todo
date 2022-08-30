import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav mx-auto">
    <a className="nav-item nav-link" href="#"><Link style={{color: "white", textDecoration: "none"}} to="todo">Home</Link>
</a>
      <a className="nav-item nav-link" href="#"><Link style={{color: "white", textDecoration: "none"}} to="todo/About">About</Link></a>
     </div>
  </div>
</nav>     
<br /><br />
    <Routes>
      <Route path="todo" element={<Home />} />
        <Route path="todo/About" element={<About />} />
    </Routes>
    </div>



    // <Home initialList={toDoArr}></Home>
  );
}

export default App;
