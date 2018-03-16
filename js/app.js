const drowsySafe = 'You are up and active!';
const drowsyDanger = 'You are drowsy! Stop the car!';
const drowsyMedium = 'You are a bit drowsy, be careful!';
let drowsyMsg = document.querySelector('.drowsy-message');
let drowsyAmount = document.querySelector('.drowsiness-level');

let drowsyValue = document.querySelector('.drowsy-val');
let aggressiveValue = document.querySelector('.aggressive-val');
let totalRatingValue = document.querySelector('.total-rating-val');
let safeDistanceValue = document.querySelector('.safe-distance-val');
let safeVelocityValue = document.querySelector('.safe-velocity-val');

// DEBUG VARIABLES
let drowsyLevel = 100;
let drowsyCircularBar = document.querySelector('.c100');

//Randomizing all variables
setInterval(function() {
    aggressiveValue.textContent = Math.floor((Math.random() * 100) + 1);
    totalRatingValue.textContent = Math.floor((Math.random() * 100) + 1);
    safeDistanceValue.textContent = Math.floor((Math.random() * 100) + 1) + 'm';
    safeVelocityValue.textContent = Math.floor((Math.random() * 100) + 1);
    drowsyValue.textContent = Math.floor((Math.random() * 100) + 1); 
}, 5000);

//Change colouring of whole web page at night times
/*
setInterval(function () {
    drowsyMsg.removeAttribute('class');
    drowsyCircularBar.removeAttribute('class');
    drowsyAmount.innerHTML = drowsyLevel;
    if (drowsyLevel > 90) {
        drowsyCircularBar.classList.add('c100', `p${drowsyLevel}`, 'red');
        drowsyMsg.innerHTML = drowsyDanger;
        drowsyMsg.classList.add('drowsy-message', 'drowsy-danger');
    } else if (drowsyLevel > 60) {
        drowsyCircularBar.classList.add('c100', `p${drowsyLevel}`, 'orange');
        drowsyMsg.innerHTML = drowsyMedium;
        drowsyMsg.setAttribute('class', '');
        drowsyMsg.classList.add('drowsy-message', 'drowsy-medium');
    } else {
        drowsyCircularBar.classList.add('c100', `p${drowsyLevel}`, 'green');
        drowsyMsg.innerHTML = drowsySafe;
        drowsyMsg.setAttribute('class', '');
        drowsyMsg.classList.add('drowsy-message', 'drowsy-safe');
    }
}, 20000); */