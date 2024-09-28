import React, { Component, StrictMode } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
// import Last from './Components/Last.jsx'
// import Cards from './Components/Cards'
export default class App extends Component{
    render(){
        return(
            <StrictMode>
             <div>
         <NavBar/>
          <Home/>
        
                 </div>
            </StrictMode>
        )
    }
}