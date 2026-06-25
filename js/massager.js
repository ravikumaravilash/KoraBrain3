let currentSeconds = 0;

let timerInterval;

function startTimer(){

clearInterval(timerInterval);

currentSeconds = 0;

timerInterval = setInterval(()=>{

currentSeconds++;

const minutes =
String(Math.floor(currentSeconds/60))
.padStart(2,"0");

const seconds =
String(currentSeconds%60)
.padStart(2,"0");

document.getElementById(
"timer"
).innerText =
`${minutes}:${seconds}`;

},1000);

}

function activateMode(mode){

document.getElementById(
"currentMode"
).innerText =
mode.toUpperCase();

startTimer();

sendToESP32(mode);

showPopup(
`${mode.toUpperCase()} MODE ACTIVATED`
);

}

function stopMassager(){

clearInterval(timerInterval);

document.getElementById(
"currentMode"
).innerText =
"IDLE";

sendToESP32("stop");

showPopup(
"MASSAGER STOPPED"
);

}

function sendToESP32(command){

/*
Replace with your ESP32 IP
*/

fetch(
`http://192.168.1.100/${command}`
)

.then(response=>{

console.log(
"ESP32 Command Sent"
);

})

.catch(error=>{

console.log(error);

});

}

function showPopup(message){

const popup =
document.createElement("div");

popup.innerText =
message;

popup.style.position =
"fixed";

popup.style.top =
"30px";

popup.style.right =
"30px";

popup.style.padding =
"15px 25px";

popup.style.background =
"#14532d";

popup.style.color =
"white";

popup.style.borderRadius =
"10px";

popup.style.zIndex =
"9999";

document.body.appendChild(
popup
);

setTimeout(()=>{

popup.remove();

},3000);

}