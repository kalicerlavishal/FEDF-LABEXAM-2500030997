import { BrowserRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';

import MainNavBar from './exam/MainNavBar';


function App() {
  
  return (
     <BrowserRouter>
         
         <MainNavBar/>
     </BrowserRouter>
  );
}

export default App;
