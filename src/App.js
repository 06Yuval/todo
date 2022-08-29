import './App.css';
import toDoArr from './initalToDoList';
import Home from './pages/Home';

function App() {
  return (
    <Home initialList={toDoArr}></Home>
  );
}

export default App;
