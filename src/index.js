import './styles.css';

const colors = [
  '#a8e9f0',
  '#a8b0f0',
  '#a8f0e8',
  '#e8f0a8',
  '#f0a8a8',
  '#f0a8e5',
];

let intervalId = null;
let buttonIsActive = true;
let precedence = 1; 

const refs = {
  body: document.querySelector('body'),
  box: document.querySelector('.fixed-box'),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
}

refs.start.addEventListener('click', onStartInterval);
refs.stop.addEventListener('click', onStopInterval);


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function addRandomColor(arr) {
    const index = randomIntegerFromInterval(0, arr.length - 1);

    refs.body.style.backgroundColor = arr[index];
}

function addBall() {
    let size = randomIntegerFromInterval(50, 300);
    
//-------------------- ball ---------------------------------->    

    let ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.width = `${size}px`;
    ball.style.height = `${size}px`;
    ball.style.top = `${randomIntegerFromInterval(0, 100)}%`;
    ball.style.left = `${randomIntegerFromInterval(0, 100)}%`;
    ball.style.zIndex = precedence;
    ball.style.backgroundColor = `rgb(${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(0, 255)})`;

//-------------------- blick --------------------------------->    

    let blick = document.createElement('div');
    blick.classList.add('blick')
    blick.style.width = `${size / 5}px`
    blick.style.height = `${size / 10}px`

//------------------------------------------------------------>    

    precedence += 1;  

    ball.append(blick);
    refs.body.append(ball);
}


function onStartInterval() {
    if (!buttonIsActive) {
        return;
    };
    
    buttonIsActive = false;

    intervalId = setInterval((arr) => {

        addRandomColor(arr);
        addBall();

    }, 1000, colors);
}


function onStopInterval() {
  clearInterval(intervalId);
  buttonIsActive = true;
}




