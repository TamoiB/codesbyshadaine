const accordion = document.querySelectorAll('.title')

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', () => {
    accordion[i].classList.toggle('hide')
    const nextSib=  accordion[i].nextElementSibling;
    nextSib.classList.toggle('show');
    nextSib.classList.add('ani')
  })
}

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', () => {
  const name = document.getElementById('name');
  const confirmText = document.createElement('p');
  confirmText.classList.add('lead');
  confirmText.classList.add('confirm')
  confirmText.innerText = `Hey ${name}, thanks for submitting`
  document.appendChild(p)
})