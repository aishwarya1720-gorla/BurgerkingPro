import React,{Component, StrictMode} from 'react';
import './NavBar.css';
export default class NavBar extends Component{
    render(){
        return(
            <StrictMode>
            <div class="navi1">
            <ol id="nav">
              <li id="nav1"> 
                    <ol id="ol-1">
                        <li><i class="fa-solid fa-bars"></i></li>
                        <li id="name">BURGER KING</li>
                    </ol>
                </li>
                <li id="nav2">
                    <ol id="ol-2">
                    <li id="user" ><i class="fa-solid fa-user"></i></li>
                     <li><button id="button2"><i class="fa-solid fa-basket-shopping"></i><b> View Cart</b></button></li>
                    </ol>
                </li>
              </ol>
            </div>
            </StrictMode>
        )}}