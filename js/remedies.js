const remedies = {

cold: {
title: "Tulsi & Ginger Tea",

benefits: [
"Supports respiratory comfort",
"Traditionally used during seasonal illnesses",
"Provides warmth and hydration"
],

ingredients: [
"5 Tulsi leaves",
"1 inch Ginger",
"1 cup Water"
],

steps: [
"Boil water",
"Add Tulsi and ginger",
"Simmer for 10 minutes",
"Strain and serve warm"
],

usage:
"Drink 1-2 times daily.",

precaution:
"Seek professional care if symptoms persist."
},

stress: {
title: "Ashwagandha Milk",

benefits: [
"Supports relaxation",
"Traditionally used for stress management",
"Promotes overall wellbeing"
],

ingredients: [
"1 tsp Ashwagandha powder",
"1 cup warm milk"
],

steps: [
"Warm milk",
"Mix Ashwagandha powder",
"Stir thoroughly",
"Consume before bedtime"
],

usage:
"Once daily in the evening.",

precaution:
"Consult a healthcare professional before regular use."
}

};

function checkSymptom(){

const symptom =
document.getElementById("symptomInput")
.value.toLowerCase();

const remedy =
remedies[symptom];

if(!remedy){

document.getElementById("results").innerHTML=
`
<div class="result-card">
<h3>No Match Found</h3>
<p>Please consult a healthcare professional.</p>
</div>
`;

return;
}

document.getElementById("results").innerHTML=
`

<div class="result-card">

<h2>${remedy.title}</h2>

<h3>Benefits</h3>

<ul>
${remedy.benefits.map(item=>`<li>${item}</li>`).join("")}
</ul>

<h3>Ingredients</h3>

<ul>
${remedy.ingredients.map(item=>`<li>${item}</li>`).join("")}
</ul>

<h3>Preparation</h3>

<ol>
${remedy.steps.map(item=>`<li>${item}</li>`).join("")}
</ol>

<h3>Usage</h3>

<p>${remedy.usage}</p>

<h3>Precaution</h3>

<p>${remedy.precaution}</p>

</div>

`;

}