function classToggle() {
    const navs = document.querySelectorAll('.nav-items')
    navs.forEach(nav => nav.classList.toggle('navbar-toggleshow'));
  }
  
  document.querySelector('.Navbar-Link-toggle')
    .addEventListener('click', classToggle);

// const prefs = document.getElementsByClassName("preferences");
// console.log(prefs);

// Function to toggle the bar
// function navbartoggle() {
//   let x = document.getElementById("nav-items");
//   if (x.style.display === "block") {
//       x.style.display = "none";
//   } else {
//       x.style.display = "block";
//   }
// }

// // Function to toggle the plus menu into minus
// function myFunction(x) {
//   x.classList.toggle("fa-solid fa-xmark");
// }