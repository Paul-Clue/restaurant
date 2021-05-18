import Img from './food.jpg';

const home = () => {

const myIcon = new Image();
myIcon.src = Img;
myIcon.setAttribute('style', 'width: 100%; height: 100%;  object-fit: cover;');

const element = document.querySelector('#content');
element.setAttribute('style', 'width: 100%; height: 100%;');


const heading = document.createElement('h1');
heading.setAttribute('style', 'color: brown; border-bottom: 4px solid yellow; position: absolute; top: 80px; left: 35%; font-size: 70px; ');
heading.innerText = 'GREAT EATS';

const pee = document.createElement('p');
pee.setAttribute('style', 'color: salmon; position: absolute; top: 500px; left: 25%; font-size: 25px; ');
pee.innerText = 'This is the "best restaurant for Central American food", according to the NY Times. ';

element.appendChild(myIcon);
element.appendChild(heading);
element.appendChild(pee);

return element;
};

export default home;