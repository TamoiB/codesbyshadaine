 //Font Awesome Cdn Copy Function
 const text = document.getElementById('confirm')
 const btnCopy = document.getElementById('copy');
 
 btnCopy.addEventListener('click', () =>{
const textarea = document.createElement('textarea');
textarea.value = '<link rel="stylesheet" href=" https://use.fontawesome.com/releases/v5.15.3/css/all.css " integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous" >';
document.body.appendChild(textarea);
textarea.select();
document.execCommand('copy');
text.style.display = 'block'
textarea.remove();
text.addEventListener('mouseleave', () => {
  text.style.display ='none'
})
});

//Google Fonts link vs import tab copy function

const linkBtn = document.getElementById('link');
const importBtn = document.getElementById('import');
 const comfirmText = document.getElementById('confirmG')
 const copyBtn = document.getElementById('copyBtn');
 const codeBody = document.getElementById('code');

 //Link Copy and Past 
 linkBtn.addEventListener('click', () =>{
linkBtn.style.borderBottom= '#fff solid 2px';
linkBtn.style.borderRadius = '0';
importBtn.style.borderBottom= 'none';

codeBody.innerHTML = `


    &lt;link rel="<span>preconnect</span>" href="<a href="">https://fonts.googleapis.com</a>"&gt;
    &lt;link rel="<span>preconnect</span>" href="<a href="">https://fonts.gstatic.com</a>" crossorigin&gt;
    &lt;link href="<a href="">https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,400;1,100;1,300;1,400;1,500&family=Oswald:wght@200;300;400;500;600;700&family=Play:wght@400;700&family=Quicksand:wght@300;400;500;600;700&display=swap</a>" rel="<span>stylesheet</span> "&gt;      

    :root<span>{</span>
        --cinzel-font: 'Cinzel', serif;
        --mont-font: 'Montserrat', sans-serif;
        --oswald-font: 'Oswald',  sans-serif;
        --play-font: 'Play',  sans-serif;
        --quick-font: 'Quicksand', sans-serif;
    <span>}</span>`

  
const textareaLink = document.createElement('textarea');
textareaLink.value = `
<link rel="preconnect" href="https://fonts.googleapis.com">;
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>;
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,400;1,100;1,300;1,400;1,500&family=Oswald:wght@200;300;400;500;600;700&family=Play:wght@400;700&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet ">;

    :root{
        --cinzel-font: 'Cinzel', serif;
        --mont-font: 'Montserrat', sans-serif;
        --oswald-font: 'Oswald',  sans-serif;
        --play-font: 'Play',  sans-serif;
        --quick-font: 'Quicksand', sans-serif;
    }`;
document.body.appendChild(textarea);
textareaLink.select();
document.execCommand('copy');
comfirmText.style.display = 'block'
textareaLink.remove();
comfirmText.addEventListener('mouseleave', () => {
  comfirmText.style.display ='none'
})
});
 //Import Copy and Past 
 importBtn.addEventListener('click', () =>{
linkBtn.style.borderBottom= 'none';
importBtn.style.borderBottom= '#fff solid 2px';
importBtn.style.borderRadius = '0';
codeBody.innerHTML = `

      &lt;style&gt;
      @import url('<a>https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,400;1,100;1,300;1,400;1,500&family=Oswald:wght@200;300;400;500;600;700&family=Play:wght@400;700&family=Quicksand:wght@300;400;500;600;700&display=swap</a>');   
      &lt;/style&gt;     

      <span>/* Variables for Each Font Family */ </span>
      
    :root<span>{</span>
        --cinzel-font: 'Cinzel', serif;
        --mont-font: 'Montserrat', sans-serif;
        --oswald-font: 'Oswald',  sans-serif;
        --play-font: 'Play',  sans-serif;
        --quick-font: 'Quicksand', sans-serif;
    <span>}</span>`;

  
const textareaLink = document.createElement('textarea');
textareaLink.value = `

@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,400;1,100;1,300;1,400;1,500&family=Oswald:wght@200;300;400;500;600;700&family=Play:wght@400;700&family=Quicksand:wght@300;400;500;600;700&display=swap');

    :root{
        --cinzel-font: 'Cinzel', serif;
        --mont-font: 'Montserrat', sans-serif;
        --oswald-font: 'Oswald',  sans-serif;
        --play-font: 'Play',  sans-serif;
        --quick-font: 'Quicksand', sans-serif;
    }`;
document.body.appendChild(textarea);
textareaLink.select();
document.execCommand('copy');
comfirmText.style.display = 'block'
textareaLink.remove();
comfirmText.addEventListener('mouseleave', () => {
  comfirmText.style.display ='none'
})
});
