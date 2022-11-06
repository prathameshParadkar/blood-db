import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route 
            exact path='/'
            element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
