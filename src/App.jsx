import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
{/*       <Routes>
          <Route path="/" element={<Chat/>}/>
          <Route path="/Reports" element={<Reports/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
