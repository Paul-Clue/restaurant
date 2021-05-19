import './style.css';
import nav from './navigation';
import home from './home';
import contact from './contact';
import about from './about';

const app = document.querySelector('#content');
app.setAttribute('style', 'width: 100%; height: 100%;');

app.appendChild(nav());
app.appendChild(home());

const change = () => {
  const value = this.getAttribute('id');
  let value2 = contact();

  if (value === 'home') {
    value2 = home();
  } else if (value === 'contact') {
    value2 = contact();
  } else {
    value2 = about();
  }

  app.removeChild(app.childNodes[1]);
  app.appendChild(value2);
}

const hme = document.querySelector('#home');
hme.addEventListener('click', change);

const con = document.querySelector('#contact');
con.addEventListener('click', change);

const abt = document.querySelector('#about');
abt.addEventListener('click', change);
