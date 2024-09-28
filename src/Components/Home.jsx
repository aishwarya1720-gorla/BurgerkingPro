import React, { Component, StrictMode } from 'react';
import './Home.css';

export default class App extends Component{
    render(){
        return(
            <StrictMode>
              <div id="sub">
              <div id="part1">
                    <h1 id="ph-1">Start <br/>your BK® order. </h1>
                     <button id="but4"> <i class="fa-solid fa-basket-shopping"></i> Order Pickup</button>
                     <button id="but5"> <i class="fa-solid fa-truck"></i> Order Delivery</button>
                </div>
                <div>
                    <img src="/Assessts/b1.webp" alt="burger" id="image1" />
                </div>
              {/* </div>
           */}
              </div>
            </StrictMode>
        )
    }
}