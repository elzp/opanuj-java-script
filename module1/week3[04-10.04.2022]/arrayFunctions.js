/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 15 - "Funkcje tablicowe"
*/

/*
* Cel zadania
*------------
* Zaimplementuj własne wersje funkcji tablicowych Array.prototype.length oraz Array.prototype.filter, bez wykorzystania tych wbudowanych.
*
*
* Przykład:
* filter([1, 2, 3, 4], isEven); // => [2, 4]
* length([1, 2, 3, 4]); // => 4
* 
*/

function filter(array, callback) {
	
	if(!Array.isArray(array)){
		throw new Error('Argument must be an array.');
	}
	
	const result = [];
	
	for (const item of array){
		if(callback(item)){
			result.push(item);
		}
	}

	return result;
}

function length(array) {
	
	if(!Array.isArray(array)){
		throw new Error('Argument must be an array.');
	}
	
	let length = 0;
	
	while(array[length] !== undefined)	{
		length++;
	}
	
return length;
}


/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(',') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

// verify(filter([1, 2, 3, 4], (el) => el % 2 === 0), [2, 4]);
// verify(filter([1, 2, 3, 4], (el) => el % 2 !== 0), [1, 3]);
// verify(length([1, 2, 3, 4]), 4);
verify(length([]), 0);

// for testing Error Objects
// verify(filter('t', (el) => el % 2 !== 0), [1, 3]);
// verify(length(), 0);

verify(length([undefined, 2, 3, 4]), 4);
verify(length([undefined, 2, 4, 3, 4]), 5);