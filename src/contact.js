import Img from './food.jpg';

const contact = () => {

  const myIcon = new Image();
myIcon.src = Img;
myIcon.setAttribute('style', 'width: 100%; height: 100%;  object-fit: cover;');

const cont = document.createElement('div');
  cont.setAttribute('class', 'cont');

const heading = document.createElement('h1');
heading.setAttribute('style', 'color: brown; border-bottom: 4px solid yellow; position: absolute; top: 80px; left: 35%; font-size: 70px; ');
heading.innerText = 'Contact Us';

const pee = document.createElement('p');
pee.setAttribute('style', 'color: salmon; position: absolute; top: 500px; left: 25%; font-size: 25px; ');
pee.innerText = 'Drop us an email at:  goodfood@google.com ';

const pee2 = document.createElement('p');
pee2.setAttribute('style', 'color: salmon; position: absolute; top: 540px; left: 25%; font-size: 25px; ');
pee2.innerText = 'Give us a call at: (555) 555-5555';

cont.appendChild(myIcon);
cont.appendChild(heading);
cont.appendChild(pee);
cont.appendChild(pee2);

return cont;
};

export default contact;