/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 16 - "Policz słowa"
*/

/*
* Cel zadania
*------------
* Otrzymując zdanie jako parametr wejściowy, zwróć obiekt, który będzie zawierał liczbę wystąpień każdego słowa w zdaniu. Zignoruj to czy słowo jest napisane z dużej czy z małej litery.
*
* 
*
* Przykład:
* countWords("Nauka JavaScript z kursem Opanuj JavaScript to frajda"); // => {
  nauka: 1,
  javascript: 2,
  z: 1,
  kursem: 1,
  opanuj: 1,
  to: 1,
  frajda: 1
}
* 
* 
*/
'use strict';
function countWords(sentence) {
	const result = {};
	const words = sentence.split(/[^\p{Letter}]+/igu);

		for(const word of words){
		const lowerCaseWord = word.toLowerCase()
		const isWordAKeyInResult = Object.keys(result).some(item => item === lowerCaseWord)
			
		if(isWordAKeyInResult){
			result[lowerCaseWord]++;
		} else {
			result[lowerCaseWord] = 1;
		}
	}

	return result;
}

/* Weryfikacja */
function areEqual(object, goal){
	let objectLiteral = typeof goal === 'string' ? JSON.parse(object) : object;
	let goalObject = typeof goal === 'string' ? JSON.parse(goal) : goal;
	let result = [];
	
	
	function nonSymmetricalCompareOfObjects(object1, object2){
		let result = [];
		for(const parameter of Object.keys(object1)){
		const isParameterExistInObject = Object.keys(object2).some(item => item === parameter)

		if(isParameterExistInObject){
			result.push(object1[parameter] === object2[parameter]);
			} else{
			result.push(false);
			}
		}
		return result;
	}
	result.push(...nonSymmetricalCompareOfObjects(goalObject, objectLiteral), 
	...nonSymmetricalCompareOfObjects(objectLiteral, goalObject))

	return result !== [] && result.every(item => item === true);

}

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(', ') : input;
  if (areEqual(input, goal)) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(JSON.stringify(countWords("Nauka JavaScript z kursem Opanuj JavaScript to frajda")), JSON.stringify(
	{
  nauka: 1,
  javascript: 2,
  z: 1,
  kursem: 1,
  opanuj: 1,
  to: 1,
  frajda: 1
	}));

verify(JSON.stringify(countWords("Tanie wino jest dobre, bo jest tanie i dobre")), JSON.stringify(
	{
  tanie: 2,
  wino: 1,
  jest: 2,
  dobre: 2,
  bo: 1,
  i: 1,
	}));

	
verify(JSON.stringify(countWords("Tanie wino jest dobre, bo jest tanie i dobre")), JSON.stringify(
	{
  tanie: 2,
  wino: 1,
  jest: 2,
  dobre: 2,
  bo: 1,
  i: 2,
	}));