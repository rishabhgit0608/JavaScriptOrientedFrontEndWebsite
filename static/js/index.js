//1. Challenge 1 age in days
function ageInDays() {
    var ageInyears = prompt("Enter your birth year");
    var ageInDays = (2020 - ageInyears) * 365 + 5;
    console.log(ageInDays);
    var h1 = document.createElement('h1');
    var result = document.createTextNode("You are "+ageInDays+" days old.");
    h1.setAttribute('id','age-in-days');
    h1.appendChild(result);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('age-in-days').remove();
}
//2. Challenge 2 Cat generator

function catGenerator(){
    var addImg = document.createElement('img');
    // addImg.setAttribute('id','cat-img');
    var div = document.getElementById('flexBox2');
    addImg.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(addImg);
}