function checkSymptom(){

const symptom =
document.getElementById("symptom").value;

const result =
document.getElementById("result");

let text = "";

switch(symptom){

case "Knee Pain":

text =
"Recommended: Turmeric Milk, Mahanarayan Oil, Gentle Yoga.";

break;

case "Stress":

text =
"Recommended: Ashwagandha, Meditation, Herbal Tea.";

break;

case "Poor Sleep":

text =
"Recommended: Warm Milk, Brahmi, Relaxation Therapy.";

break;

case "Digestive Issues":

text =
"Recommended: Ginger Tea, Triphala, Balanced Diet.";

break;

default:

text =
"Please select a symptom.";

}

result.style.display = "block";

result.innerHTML = text;
}