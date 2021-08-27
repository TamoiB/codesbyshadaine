// Responsive Navigation Variables
const toggleBtn = document.getElementById('toggle');
const navList = document.getElementById('toggleList');
const closeNav = document.getElementById('closeNav');
//EventListener For Toggle Button
toggleBtn.addEventListener('click', () => {
 if (navList.style.display == "none") {
    navList.style.display = "flex"
  } else {
    navList.style.display = "none"
  }
 if (window.innerWidth = '450px') {
   closeNav.addEventListener('click', () => {
     navList.style.display = 'none';
   })
 }
})



