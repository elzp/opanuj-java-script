/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 17 - "Anagramy"
*/

/*
* Cel zadania
*------------
* Otrzymując jako parametry słowo i tablicę jego możliwych anagramów, zwróć tablicę z właściwymi anagramami.
*
*  Anagram to wyraz powstały przez przestawienie liter innego wyrazu, wykorzystujący wszystkie litery materiału wyjściowego.
*
* Przykład:
* getAnagrams("przeprogramowani", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]);  => ["orperzpinawomarg",  "graprzewanipromo"]
* 
* 
*/

function countLetters(word) {
	let result = {};
	const letters = word.split(/[^\w]|/ig);
// console.log(letters)
		for(letter of letters){
			// console.log(letter)
		const lowerCaseLetter = letter.toLowerCase()
		const isLetterAKeyInResult = Object.keys(result).some(item => item === lowerCaseLetter)
			
		if(isLetterAKeyInResult){
			result[lowerCaseLetter]++;
		} else {
			result = {
				[lowerCaseLetter]: 1,
				...result
			}
		}
	}

	return result;
}


function areObjectEqual(object, goal){
	let objectLiteral = typeof goal === 'string' ? JSON.parse(object) : object;
	let goalObject = typeof goal === 'string' ? JSON.parse(goal) : goal;
	
	let result = [];
	
	function nonSymetricalCompareOfObjects(object1, object2){
		let result= [];
		for(parameter of Object.keys(object1)){
		const isParameterExistInObject = Object.keys(object2).some(item => item === parameter)

		if(isParameterExistInObject){
			result.push(object1[parameter] === object2[parameter]);
			} else{
			result.push(false);
			}
		}
		return result;
	}
	result = nonSymetricalCompareOfObjects(goalObject, objectLiteral)

	result = nonSymetricalCompareOfObjects(objectLiteral, goalObject)

	return result !== [] && result.every(item => item === true);

}

function getAnagrams(word, possibleAnagrams) {
	const result = [];
	const lettersOfWordAsObject = countLetters(word);
		
	for(annagram of possibleAnagrams){
		const lettersOfAnnagramAsObject = countLetters(annagram);
		const isAnnagram = areObjectEqual(lettersOfWordAsObject,
																			lettersOfAnnagramAsObject)

		if(isAnnagram){
			result.push(annagram);
		}	
	}
	
	return result;	
}


/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(', ') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(getAnagrams("przeprogramowani", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]), "orperzpinawomarg, graprzewanipromo");
verify(getAnagrams("siema", ["hej", "witam", "dzień dobry", "emasi"]), "emasi");