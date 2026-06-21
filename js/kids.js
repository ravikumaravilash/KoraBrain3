const stories = [

"Welcome! Let's learn about Diwali.",

"Diwali is called the Festival of Lights.",

"Families decorate homes with lamps.",

"People exchange sweets and gifts.",

"Diwali symbolizes the victory of light over darkness."

];

let current = 0;

function nextStory(){

current++;

if(current >= stories.length){

current = 0;

}

document.getElementById(
"storyText"
).innerText = stories[current];

}

function speakStory(){

const text =
document.getElementById(
"storyText"
).innerText;

const speech =
new SpeechSynthesisUtterance(text);

speech.lang = "en-US";

speechSynthesis.speak(speech);

}

function checkAnswer(correct){

const result =
document.getElementById(
"quizResult"
);

if(correct){

result.innerHTML =
"✅ Correct!";

}
else{

result.innerHTML =
"❌ Try Again!";

}

}