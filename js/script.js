const btnStart = document.querySelector('#start-btn');
const timer = document.querySelector('#timer');
const randomNumbers = document.querySelector('#numeri-da-indovindare');
const cardNumeriDaIndovinare = document.querySelector('#card-numeri-da-indovinare');

let numeriDaIndovindare =[];
const limite = 5;
let counter = limite;


timer.innerHTML = 'Timer: '+ limite;
btnStart.addEventListener('click', start);
numeriDaIndovindare = createRandomArray(5);
randomNumbers.innerHTML = numeriDaIndovindare;

function start() {
  this.removeEventListener('click', start);
	cardNumeriDaIndovinare.classList.remove('d-none');
  const clock = setInterval(function() {
    counter--;
    timer.innerHTML = 'Timer: '+ counter;
    
    if (counter === 0) {
      clearInterval(clock)
			cardNumeriDaIndovinare.classList.add('d-none');
    }
  }, 1000)
}


//genera 5 numeri random e li salva in un array
function createRandomArray(limitNumber){
	const array =[];
	let n;
	
	while (array.length < limitNumber) {
		n = randomIndex(1, 100);
		if (!array.includes(n)){
			array.push(n);
		} 
	}
	return array;
}
console.log(numeriDaIndovindare);
randomNumbers.innerHTML = numeriDaIndovindare;

//genera un numero random
function randomIndex(min, max){
	result = Math.ceil(Math.random() * (max - min + 1) + min);
	return result;
};