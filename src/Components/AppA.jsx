import React,{Component, StrictMode} from "react";
import './Home2.css';
export default class AppA extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <StrictMode>
                <div>
                   
                <div class="card">
                    <img
                    src={this.props.imgSrc}
                    alt={this.props.alt}
                    />
                    <div id="container">
                        <h2 id="head1" >
                        {this.props.h1}
                        </h2>
                        <p id="p1">
                            {this.props.para1}
                        </p>
                        <a href="" id="an1">{this.props.a1}</a>  
                    </div>
                    <div id="button">
                    <button id="butt1">{this.props.but1}</button>
                    </div>
                </div>
               
             </div>
            </StrictMode>
        )
    }
}