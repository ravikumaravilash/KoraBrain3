const messages =
document.getElementById(
"chatMessages"
);

function addMessage(text,type){

const div =
document.createElement("div");

div.className =
`message ${type}`;

div.innerHTML = text;

messages.appendChild(div);

messages.scrollTop =
messages.scrollHeight;

}

function sendMessage(){

const input =
document.getElementById(
"userInput"
);

const text =
input.value.trim();

if(!text) return;

addMessage(text,"user");

let response =
generateResponse(text);

setTimeout(()=>{

addMessage(response,"bot");

},600);

input.value="";

}

function quickQuestion(q){

document.getElementById(
"userInput"
).value=q;

sendMessage();

}

function generateResponse(question){

question =
question.toLowerCase();

if(question.includes("ayurveda")){

return "🌿 Ayurveda is a traditional Indian system of medicine focused on balancing body, mind and spirit.";

}

if(question.includes("diwali")){

return "🪔 Diwali is the Festival of Lights celebrated across India.";

}

if(question.includes("india")){

return "🇮🇳 India has one of the world's oldest civilizations and diverse cultures.";

}

if(question.includes("remedy")){

return "💡 A traditional remedy includes turmeric milk for wellness support.";

}

return "🤖 I am still learning. More AI features coming soon.";

}