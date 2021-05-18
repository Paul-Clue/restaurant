//console.log("Is everything working?");
import _ from 'lodash';
import './style.css';
import nav from './navigation.js'
import home from './home.js';
import contact from './contact.js';
import about from './about.js';


const app = document.querySelector('#content');
  app.setAttribute('style', 'width: 100%; height: 100%;');
// const app2 = document.querySelector('#content');
app.appendChild(nav());
app.appendChild(home());

const change = function(){
  const value = this.getAttribute('id');
  let value2 = contact();

  if(value == 'home'){
     value2 = home();
  }else if(value == 'contact'){
     value2 = contact();
  }else{
    value2 = about();
  }

  const head = document.querySelector('h1');
  const para = document.querySelector('p');
  app.removeChild(app.childNodes[1]);
  // app.removeChild(para);
  app.appendChild(value2);
};

const hme = document.querySelector('#home');
hme.addEventListener('click', change);
// hme.addEventListener('click', () => {
  
//   console.log(app.childNodes);
//   const head = document.querySelector('h1');
//   const para = document.querySelector('p');
//   app2.removeChild(head);
//   app2.removeChild(para);
//   app.appendChild(contact());
  
// });

const con = document.querySelector('#contact');
con.addEventListener('click', change);

const abt = document.querySelector('#about');
abt.addEventListener('click', change);


