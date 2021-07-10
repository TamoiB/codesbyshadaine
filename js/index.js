// Responsive Navigation Variables
const toggleBtn = document.getElementById('toggle');
const navList = document.getElementById('toggleList');
//EventListener For Toggle Button
toggleBtn.addEventListener('click', () => {
 if (navList.style.display == "none") {
    navList.style.display = "flex"
  } else {
    navList.style.display = "none"
  }
})
//Back to the top Button 
