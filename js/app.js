const date = new Date();
const hours = date.getHours();

const drowsySafe = 'You are up and active!';
const drowsyDanger = 'You are drowsy! Stop the car!';
const drowsyMedium = 'You are a bit drowsy, be careful!';
let drowsyMsg = document.querySelector('.drowsy-message');
let drowsyAmount = document.querySelector('.drowsiness-level');

// DEBUG VARIABLES
let drowsyLevel = 100;
let drowsyCircularBar = document.querySelector('.c100');

if (hours > 12) {
    //TODO: Change style at night time and day time accordingly 
}

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
}, 20000);