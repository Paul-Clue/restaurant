
const nav =() => {
  const element2 = document.querySelector('#content');

  const navi = document.createElement('nav');
  navi.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-warning');
  

  const div1 = document.createElement('div');
  div1.setAttribute('class', 'container-fluid');

  const div2 = document.createElement('div');
  div2.setAttribute('class', 'collapse navbar-collapse');
  div2.setAttribute('id', 'navbarNav');

  const list = document.createElement('ul');
  list.setAttribute('class', 'navbar-nav');

  const li = document.createElement('li');
  li.setAttribute('class', 'nav-item');
  const aa = document.createElement('a');
  aa.setAttribute('class', 'nav-link active home');
  aa.setAttribute('href', '#');
  aa.innerText ='Home';
  li.appendChild(aa);
 
  const li2 = document.createElement('li');
  li.setAttribute('class', 'nav-item');
  const aa2 = document.createElement('a');
  aa2.setAttribute('class', 'nav-link contact');
  aa2.setAttribute('href', '#');
  aa2.innerText ='Contact Us';
  li2.appendChild(aa2);

  const li3 = document.createElement('li');
  li.setAttribute('class', 'nav-item');
  const aa3 = document.createElement('a');
  aa3.setAttribute('class', 'nav-link about');
  aa3.setAttribute('href', '#');
  aa3.innerText ='About Us';
  li3.appendChild(aa3);

  list.appendChild(li);
  list.appendChild(li2);
  list.appendChild(li3);
  div2.appendChild(list);
  div1.appendChild(div2);
  navi.appendChild(div1);

  element2.appendChild(navi);

  return element2;
};

export default nav;



{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}