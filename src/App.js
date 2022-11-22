import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Home from "./components/Home";
import RegisterPerson from './components/RegisterPerson';
import RegisterOrg from './components/RegisterOrg';
import Donate from './components/Donate';
import CreateACamp from './components/CreateACamp';
import Recieve from './components/Recieve';
import CampData from './components/CampData';
import Camps from './components/org-components/Camps';
function App() {
  const [user, setUser] = React.useState("")
  const [userId, setUserId] = React.useState(0)
  return (
    <div className="App">
        <Routes>
          <Route 
            exact path='/'
            element={<Login setUser={setUser} setUserId={setUserId} />} />
          <Route 
            exact path='/register/person'
            element={<RegisterPerson />} />
          <Route 
            exact path='/register/organisation'
            element={<RegisterOrg />} />
            <Route
            exact path ='/organization/create-a-camp'
            element = {<CreateACamp user = {user} userId = {userId}  />} />
            <Route
            exact path ='/person/donate'
            element = {<Donate user = {user} />} />
            <Route
            exact path ='/person/recieve'
            element = {<Recieve />} />
            <Route
            exact path ='/person/donate/:id'
            element = {<CampData id = {userId}/>} />
            <Route
            exact path ='/organization/camps'
            element = {<Camps id = {userId}/>} />

        </Routes>
    </div>
  );
}

export default App;
