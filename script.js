// Stop Watch
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');

let hour = 0 , minute = 0 , second = 0 , count = 0;
let timer;

startBtn.addEventListener('click',()=>{
    timer = true;
    stopWatch();
})

stopBtn.addEventListener('click',()=>{
    timer = false;
})

resetBtn.addEventListener('click',()=>{
    timer = false;
    hour =0; minute =0; second =0; count =0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});
let clickSpace = false;

function toggleSpace(){
    clickSpace = !clickSpace;
    if(clickSpace == true){
        timer = true;
        stopWatch();
    }else if(clickSpace == false){
        timer = false;
    }
}

document.addEventListener('keypress', (e)=>{
    if(e.keyCode === 32){
        toggleSpace();
    }
   if(e.key === 'Enter'){
        timer = false;
        hour =0; minute =0; second =0; count =0;
        document.getElementById('hr').innerHTML = "00";
        document.getElementById('min').innerHTML = "00";
        document.getElementById('sec').innerHTML = "00";
        document.getElementById('count').innerHTML = "00";
    }

})

function stopWatch(){
    if(timer){
        count++;
        if(count == 100){
            second++;
            count = 0;
        }
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute =0;
            second =0;
        }
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
        if(hour<10){
            hrString = "0" + hrString;
        }
        if(minute<10){
            minString = "0" + minString;
        }if(second<10){
            secString = "0" + secString;
        }
        if(count<10){
            countString = "0" + countString;
        }
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}
// Flip animation js part
let rotate = document.querySelector('.flip-btn');
let flipCard = document.querySelector('.flip-card');
let flipCardInner = document.querySelector('.flip-card-inner');
let flipCardBack = document.querySelector('.flip-card-back');
let flipToggle = false;

function flipToggleCntrl(){
    flipToggle = !flipToggle;
    if (flipToggle) {
        flipCardInner.style.transform = 'rotateY(-180deg)';
        rotate.innerHTML = "Click Here For Stop Watch";
    } else {
        flipCardInner.style.transform = 'rotateY(0deg)';
        rotate.innerHTML = "Click Here For Count Down Timer";
    }
}