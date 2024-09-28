import React, { Component } from 'react';
import db from '../Data.jsx';

export default class App extends Component{
    render(){
        return(
            <div id="main">

            {db.map(x =>{
             return(
              <App imgSrc= {x.imgSrc} 
                     alt= {x.alt}
                     h1={x.h1}
                    para1={x.para1}
                    a1={x.a1}
                     but1={x.but1}
               />
              )
           })}

          </div>
        )
    }
}