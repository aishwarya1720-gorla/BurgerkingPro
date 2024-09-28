import React,{Component, StrictMode} from'react';
import "./Last.css";
export default class Last extends Component{
    render(){
        return(
            <StrictMode>
                <div id="last">
                    <div>
                        <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/da421b826216c29608a2694126a5095f17be8676-630x622.png?w=1350&q=80&fit=max&auto=format" alt="burgerL" id="imgl1" />
                    </div>
                    <div id="last1">
                        <h1 id="lasth">
                        Save $$$ <br/>
                         With offers on demand</h1>
                    <button id="buttonl1"><img src="https://w7.pngwing.com/pngs/506/939/png-transparent-app-store-logo-iphone-app-store-get-started-now-button-electronics-text-telephone-call.png" alt=""  id="imgbut"/></button>
                    <button id="buttonl2"><img src="https://w7.pngwing.com/pngs/462/120/png-transparent-iphone-google-play-android-get-started-now-button-electronics-text-logo.png" alt=""  id="imgbut2"/></button>
                    <p id="paral">

                          Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
                    </div>
                </div>
                <div id="Footer">
               <p id="lpara"> TM & Copyright 2024 Burger King Company LLC. All Rights Reserved.
 | 
Do Not Sell Or Share My Personal Information</p>

                </div>
                <footer id="footer" >
                    <ol id="order">
                        <li class="list"><i class="fa-solid fa-house font"></i><br/>Home</li>
                        <li class="list"><i class="fa-solid fa-bars font"></i><br/>Menu</li>
                        <li class="list"><i class="fa-solid fa-tag font"></i><br/>Offers</li>
                        <li class="list"><i class="fa-solid fa-crown font"></i><br/>Rewards</li>
                    </ol>
                </footer>
            </StrictMode>
        )
    }
}