const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const starButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gamContainer = document.querySelector("game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-containar");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

//items array
const items = [
    {name :"24000",image:24000.jpeg},{name:"56",image:56.jpeg},
    {name :"5",image:5.jpeg},{name:"2224400",image:2224400.jpeg},
    {name :"15",image: 15.jpeg}
];

//Initial time 
let seconds = 0,
 minutes = 0;
 //Initial moves and win count 
let movesCount = 0,
 winCount = 0;

 //for timer
 const timeGanerator = () => {
seconds += 1;
//minutes logic
if (seconds >= 60) {
minutes += 1;
seconds = 0
}
 };
 //format time before displaying 
 let secondsValue = seconds < 10? '0${seconds}' :
 seconds; 
 let minutesValues = minutes <10 ? '0$(minutes)' :
 minutes;