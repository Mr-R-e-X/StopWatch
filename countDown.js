let givenTime = 0;
let countTime = 0;
function countDownStartEvent(){
  if(givenTime ==0){
    let collectHr = document.querySelector('.collectHr');
    let collectMin = document.querySelector('.collectMin');
    let collectSec = document.querySelector('.collectSec');
    givenTime = parseInt(collectHr.value)*3600 + parseInt(collectMin.value)*60 + parseInt(collectSec.value);
    collectHr.value = "";
    collectMin.value = "";
    collectSec.value = "";
    startCountDown(givenTime);
  }
}
function startCountDown(givenTime){
  startInterval(givenTime)
}

let startInterval = (givenTime)=>{
  window.setInterval(() => {
    if(givenTime!=countTime){
      flipAllCards(givenTime);
      // console.log(`Hr ${Math.floor(givenTime / 3600)} Min ${Math.floor(givenTime / 60) % 60} Sec ${givenTime%60}`);
      givenTime--;
    }
  }, 1000)
}
function flipAllCards(givenTime) {
  const inputSeconds = givenTime % 60;
  const inputMinutes = Math.floor(givenTime / 60) % 60;
  const inputHours = Math.floor(givenTime / 3600);

  flip(document.querySelector("[data-hours-tens]"), Math.floor(inputHours / 10))
  flip(document.querySelector("[data-hours-ones]"), inputHours % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(inputMinutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), inputMinutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(inputSeconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), inputSeconds % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}