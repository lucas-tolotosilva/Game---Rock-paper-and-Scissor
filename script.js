const resultDisplay = document.getElementById('result')
const choices = document.querySelectorAll('button');
const imgPlayer = document.getElementById('img');
const imgCpu = document.getElementById('img2');
const scissorImg = './img/scissor.png';
const paperImg = './img/paper.png';
const rockImg = './img/rock.png';
let result ;
let win = 0;
let defeat = 0;
let tie = 0;
let userChoice;
let cpuChoice;
let contPlayer;
let contCpu;

choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    if(userChoice === 'scissor'){
        imgPlayer.src = scissorImg;
        contPlayer = 'scissor';
        //playerDisplay.innerHTML = userChoice
    } else if(userChoice === 'paper') {
        imgPlayer.src = paperImg;
        contPlayer = 'paper';
    } else {
        imgPlayer.src = rockImg;
        contPlayer = 'rock';
    }
    userChoice = contPlayer;
    
    

    generateCpuChoice();
    getResults();
})) 

function generateCpuChoice (){
    const random = Math.floor(Math.random() * 3) + 1

    if(random == 1){
        imgCpu.src = rockImg;
        contCpu = 'rock';
    }
    if(random == 2){
        imgCpu.src = paperImg;
        contCpu = 'paper';
    }
    if(random == 3){
        imgCpu.src = scissorImg;
        contCpu = 'scissor';
        //cpuDisplay.innerHTML = 'scissor';
    }
    cpuChoice = contCpu; 
    console.log(cpuChoice)
    //cpuChoice = cpuDisplay.innerHTML;
}

function getResults(){
    const playerScore = document.getElementById('p_score');
    const cpuScore = document.getElementById('c_score');
    const tieScore = document.getElementById('t_score');
    

    if(userChoice === cpuChoice){
        result = 'tie';
        tie = tie + 1;
    }
    if(userChoice === 'rock' && cpuChoice === 'scissor'){
        result = 'win';
        win = win + 1;
    }
    if(userChoice === 'paper' && cpuChoice === 'rock'){
        result = 'win';
        win = win + 1;
    }
    if(userChoice === 'scissor' && cpuChoice === 'paper'){
        result = 'win';
        win = win + 1;
    }
    if(userChoice === 'rock' && cpuChoice === 'paper'){
        result = 'defeat';
        defeat = defeat + 1;
    }
    
    if(userChoice === 'paper' && cpuChoice === 'scissor'){
        result = 'defeat';
        defeat = defeat + 1;
    }
    if(userChoice === 'scissor' && cpuChoice === 'rock'){
        result = 'defeat';
        defeat = defeat + 1;
    }
    resultDisplay.innerHTML = result;
    playerScore.innerHTML = win;
    cpuScore.innerHTML = defeat;
    tieScore.innerHTML = tie;
    
}