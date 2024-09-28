import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import db from './Data.jsx';
import AppA from './Components/AppA.jsx'
// console.log(db);
import Last from './Components/Last.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
 
     <div id="main">

{db.map(x =>{
 return(
  < AppA  imgSrc= {x.imgSrc} 
         alt= {x.alt}
         h1={x.h1}
        para1={x.para1}
        a1={x.a1}
         but1={x.but1}
   />
  )
})}

</div>
<Last />
  </React.StrictMode>
);

