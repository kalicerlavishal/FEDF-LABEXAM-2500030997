import React from 'react';
import { Link,Routes,Route } from 'react-router-dom';
import './style.css'
import Registeration from './Registeration';
import Home    from './Home';
import ViewApi from './ViewApi';


import ViewEmployee from './ViewEmployee';

const MainNavBar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-container">
        
        <ul className="nav-menu">
          
         <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/registeration" className="nav-link">
              Registeration
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/view-employee" className="nav-link">
            ViewEmployee
            </Link>
            </li>
            <li  className="nav-item">
            <Link to="/view-api" className="nav-link">
            ViewApi
            </Link>
            </li>
             
             
              
            
          
        </ul>
      </div>
    </nav>

<Routes>
         <Route path="/home" element={<Home />} />
        
        <Route path="/registeration" element={<Registeration />} />
        <Route path="/view-employee" element={<ViewEmployee />} />
        <Route path="/view-api" element={<ViewApi/>}/>
       
      </Routes>


    </div>

  );
};

export default MainNavBar;
