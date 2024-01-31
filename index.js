function classToggle() {
    const navs = document.querySelectorAll('.nav-items')
    navs.forEach(nav => nav.classList.toggle('navbar-toggleshow'));
  }
  
  document.querySelector('.Navbar-Link-toggle')
    .addEventListener('click', classToggle);