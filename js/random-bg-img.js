const background = document.getElementById('backgroundText');
const colorName = document.getElementById('backgroundColor');
const btn = document.getElementById('button');
const body = document.getElementById('body');
const colorArray = [
  "url('https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
  "url('https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
  "url('https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
  "url('https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
  "url('https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
  "url('https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
  "url('https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",

]
const colorArrayName = [
  "Midnight Stars",
  "Dark Forest",
  "The Blue Igloo",
  "Spiral Sunset",
  "Clouds",
  "Bridge to Success",
  "The Gateway"
]
 btn.addEventListener('click', change);
 function change() {
   var Index = parseInt(Math.random() * colorArray.length)
   var num = Index;
   colorName.innerText = colorArrayName[num];
   body.style.backgroundImage = colorArray[Index];
 }