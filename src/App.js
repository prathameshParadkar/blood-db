import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Home from "./components/Home";
import RegisterPerson from './components/RegisterPerson';
import RegisterOrg from './components/RegisterOrg';
import CreateACamp from './components/CreateACamp';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route 
            exact path='/'
            element={<Login />} />
          <Route 
            exact path='/register/person'
            element={<RegisterPerson />} />
          <Route 
            exact path='/register/organisation'
            element={<RegisterOrg />} />
            <Route
            exact path ='/organization/create-a-camp'
            element = {<CreateACamp />} />
        </Routes>
    </div>
  );
}

export default App;
