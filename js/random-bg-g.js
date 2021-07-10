const btnCopy = document.getElementById('copy');
const btn = document.getElementById('btn');
const body = document.getElementById('body');
const text = document.getElementById('confirm')
const gradientArray = [
"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
" linear-gradient( 68.2deg,  rgba(255,202,88,1) 0%, rgba(139,73,255,1) 100.2% )",
"linear-gradient( 112.9deg,  rgba(112,255,151,1) 6.2%, rgba(70,195,255,1) 99.7% )",
"linear-gradient(143deg, rgba(158,201,88,1) 4%, rgba(230,8,8,0.16986706056129985) 99%)",
"linear-gradient(27deg, rgba(186,214,66,1) 0%, rgba(253,29,29,1) 50%, rgba(252,69,208,1) 100%)",
"linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%)",
"linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
" linear-gradient(to right, #2f7336, #aa3a38)",
]

body.style.background = gradientArray[0];
 btn.addEventListener('click', change);
 function change() {
   var Index = parseInt(Math.random() * gradientArray.length)
   body.style.background = gradientArray[Index];
  btn.addEventListener('mouseover', () => {
     btn.style.background = gradientArray[Index];
  })
   btnCopy.addEventListener('click', () =>{
const textarea = document.createElement('textarea');
const gradient = gradientArray[Index];
textarea.value = gradient;
document.body.appendChild(textarea);
textarea.select();
document.execCommand('copy');
text.style.display = 'block'
textarea.remove();
text.addEventListener('mouseleave', () => {
  text.style.display ='none'
})
});
 }





