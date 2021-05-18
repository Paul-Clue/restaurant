import Img from './food.jpg';

const about = () => {

  const myIcon = new Image();
  myIcon.src = Img;
  myIcon.setAttribute('style', 'width: 100%; height: 100%;  object-fit: cover;');

  const cont = document.createElement('div');
  cont.setAttribute('class', 'cont');
  
  const heading = document.createElement('h1');
  heading.setAttribute('style', 'color: brown; border-bottom: 4px solid yellow; position: absolute; top: 80px; left: 35%; font-size: 70px; ');
  heading.innerText = 'About Us';
  
  const pee = document.createElement('p');
  pee.setAttribute('style', 'color: salmon; position: absolute; top: 500px; left: 25%; font-size: 25px; ');
  pee.innerText = 'We are a great company.We are a great company. We are a great company. We are a great company.We are a great company.';
  
  cont.appendChild(myIcon);
  cont.appendChild(heading);
  cont.appendChild(pee);
  
  return cont;
  };

  export default about;