const stopBtn = document.getElementById('stop');
const startBtn = document.getElementById('start');
const counterNum = document.getElementById('count');

let count = 0;

  startBtn.addEventListener('click', () => {
  const counter = setInterval(() => {
    count++;
    counterNum.textContent= count;
    stopBtn.addEventListener('click', () => {clearInterval(counter)});
  }, 200);
});

