import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Details from "./Components/Details/Details";
import Home from './Components/Home/Home';

function App() {
  return (
    <div >
      <Router>
       <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route exact path="/" element={<Home/>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
