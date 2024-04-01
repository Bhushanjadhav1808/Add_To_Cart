

import React from 'react';
import './App.css';
import HomeContainer from './Containers/HomeContainer'


import { Suspense, lazy } from "react";
const NavScrollExample = lazy(() => import(
    './Components/NavScrollExample'))


function App() {
  return (
    <div className="App">
               <Suspense fallback=
{<div> loading please wait...</div>}>
                <NavScrollExample/>
            </Suspense>

    
     
     
      <HomeContainer />
    
    </div>
  );
}

export default App;
