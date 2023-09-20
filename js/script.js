const timer = document.getElementById('timer');
const btnStart = document.getElementById('start-btn');
const randomNumbers = document.getElementById('numeri-da-indovindare');
const cardNumeriDaIndovinare = document.getElementById('card-numeri-da-indovinare');
const cardResult = document.getElementById('card-risultato');

let insertedNumbers;
let comparedNumbers;


const limite = 5;
let counter = limite;
timer.innerHTML = 'Timer: ' +limite;
const randomArray = createRandomArray(5);
console.log (randomArray);


btnStart.addEventListener('click', start);
randomNumbers.innerHTML = randomArray.join(' - ');





  /*****************************************************/
 /*****************************************************/
/*****************************************************/

function start() {
  this.removeEventListener('click', start);
	cardNumeriDaIndovinare.classList.remove('d-none');
	
	let counter2 = 6;

	const clock2 = setInterval(function() {
    counter2--;
    
    if (counter2 === 0) {
      clearInterval(clock)
			const insertedNumbers = insertNumArray();
			console.log (insertedNumbers);
			comparedNumbers = compareArrays(randomArray, insertedNumbers);
			console.log ('comparedNumbers: '+comparedNumbers);
			cardResult.classList.remove('d-none');
			let result = document.getElementById('risultato');
			result.innerHTML = 'Hai indovinato '+comparedNumbers.length + ' numero/i su 5:  '+comparedNumbers.join(' - ');

    }
  }, 1000)
	const clock = setInterval(function() {
    counter--;
    timer.innerHTML = 'Timer: ' + counter;
    
    if (counter === 0) {
      clearInterval(clock)
			cardNumeriDaIndovinare.classList.add('d-none');
    }
  }, 1000)
}


//paragone tra 2 array
function compareArrays(array1, array2){
	const array =[];
	for (let i=0; i<array1.length;i++){
		if(array1.includes(array2[i])){
			array.push(array2[i]);
		}
	}
	return array;
}

//inserimento 5 numeri con prompt
function insertNumArray(){
	const array =[];
	for (let i=0; i<5; i++){
		array[i] = parseInt(prompt('Inserisci il '+(i+1)+'° numero'));
	}
	return array;
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

//genera un numero random
function randomIndex(min, max){
	result = Math.ceil(Math.random() * (max - min + 1));
	return result;
};