const about = () => {

  const element3 = document.querySelector('#content');
  element.setAttribute('style', 'width: 100%; height: 100%;');
  
  const heading = document.createElement('h1');
  heading.setAttribute('style', 'color: brown; border-bottom: 4px solid yellow; position: absolute; top: 80px; left: 35%; font-size: 70px; ');
  heading.innerText = 'About Us';
  
  const pee = document.createElement('p');
  pee.setAttribute('style', 'color: salmon; position: absolute; top: 500px; left: 25%; font-size: 25px; ');
  pee.innerText = 'We are a great company.We are a great company. We are a great company. We are a great company.We are a great company.';
  
  
  element3.appendChild(heading);
  element3.appendChild(pee);
  
  return {element3};
  };

  export default about;