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

//3. Challenge 3 Rock paper and Scissors

function rpsgame(yourChoice){
    var humanChoice,Botchoice;
    humanChoice=yourChoice.id;
    Botchoice = numberToChoice(choice());
    var result = results(Botchoice,humanChoice);
    console.log(result);
    var message =finalMessage(result);
    console.log(message);
    rpsFrontEnd(yourChoice.id,Botchoice,message);
}
function choice(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return ['rock' ,'paper','scissor'][number];
}

function results(botchoice,humanChoice){
   var rpsDb = {
       'rock':{'rock':0.5,'scissor':1, 'paper':0},
       'paper':{'scissor':0,'rock':1,'paper':0.5},
       'scissor':{'scissor':0.5, 'rock':0, 'paper':0.5} 
   }
   var yourScore = rpsDb[humanChoice][botchoice];
   var botScore  = rpsDb[botchoice][humanChoice];
   return [yourScore,botScore];
}

function finalMessage(result){
    if(result[0]>result[1]){
        return {
            'message':'You won',
            'color':'green'
        }
    }
    else if(result[0]<result[1]){
        return {
            'message':'You lose',
            'color':'red'
        }
    }
    else{
        return {
            'message':'Draw',
            'color':'blue'
       }
    }
}

function rpsFrontEnd(yourChoice,Botchoice,message){
    var imgDB = {
        'rock': document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
    console.log(imgDB['rock']);
    //removing the frontEnd and adding that to the dom
    document.getElementById('rock').remove();
    document.getElementById('scissor').remove();
    document.getElementById('paper').remove();
    
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img class='"+message['color']+"' src='"+imgDB[yourChoice]+"'>"
    document.getElementById('flexBox3').appendChild(humanDiv);
    
    messageDiv.innerHTML= "<h1>"+message['message']+"</h1>"
    document.getElementById('flexBox3').appendChild(messageDiv);


    botDiv.innerHTML = "<img class='"+message['color']+"' src='"+imgDB[Botchoice]+"'>"
    document.getElementById('flexBox3').appendChild(botDiv);
}