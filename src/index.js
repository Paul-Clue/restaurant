//console.log("Is everything working?");
import _ from 'lodash';
import './style.css';
import nav from './navigation.js'
import home from './home.js';
import contact from './contact.js';
import about from './about.js';


const app = document.querySelector('body');
app.appendChild(nav());
app.appendChild(home());


