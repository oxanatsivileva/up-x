function timer() {
  var time=document.getElementsByClassName("timer")
   
  var timings=30;
  var i=0;
  var myInterval = setInterval(Timeout, 1000);
  function Timeout(){
  if((timings*60-i)%60>=10){
  time[0].innerHTML=parseInt(`${(timings*60-i)/60}`)+":"+`${(timings*60-i)%60}`;
  }
  else{
  time[0].innerHTML=parseInt(`${(timings*60-i)/60}`)+":0"+`${(timings*60-i)%60}`;
  }  
i++;
  }}




  let cards = document.querySelectorAll('.game-area__item');
  let counts = document.querySelectorAll('.game-area__count');
  let overlay = document.querySelector('.overlay');

  cards.forEach(element =>{
    element.addEventListener('click', ()=>{
        element.querySelector('.game-area__diamond').style.display = "block";
        element.querySelector('.game-area__cell').style.display = "none";
        
        let count = document.querySelector('.empty');
        count.classList.remove('empty');
        count.classList.add('full');
        let full = document.querySelectorAll('.full');
          full.forEach(el =>{
          el.querySelector('.stone-white').classList.add('d-none');
          el.querySelector('.green').classList.remove('d-none');
        })
        element.disabled = true;        
        if (counts.length === full.length) {
          localStorage.setItem('show_popup', true)
          timer();
          setTimeout(() => {
            overlay.style.display = "flex";
          }, "500");
          setTimeout(() => {
            window.location.reload()
          }, "1800000");        
        }
    });
  });
if(localStorage.getItem('show_popup')) {
  timer();
  overlay.style.display = "flex";
}
  let amountWrapper = document.querySelector('.winning-amount');
let amount = getRandomNumber(42000000, 61000000);
renderAmount(amount);

setInterval(() => {
  let newAmount = getRandomNumber(amount + 600, amount + 100000);
  animateAmountChange(amount, newAmount);
  amount = newAmount;
}, 30000);

function animateAmountChange(start, end) {
  const duration = 800;
  const frameRate = 60;
  const totalFrames = (duration / 1000) * frameRate;
  let currentFrame = 0;

  function updateAmount() {
    currentFrame++;
    const progress = currentFrame / totalFrames;
    const currentAmount = Math.round(start + (end - start) * progress);
    renderAmount(currentAmount);

    if (currentFrame < totalFrames) {
      requestAnimationFrame(updateAmount);
    }
  }

  updateAmount();
}

function renderAmount(amount) {
  let digitsArray = amount.toString().split('').map(Number);
  amountWrapper.innerHTML = digitsArray.map(digit => `
    <div class="winning-amount__item">
    <div class="winning-amount__up"></div>
                <div class="winning-amount__down"></div>
      <div class="winning-amount__num">${digit}</div>
    </div>
  `).join('');
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  

  



  
  

  
 