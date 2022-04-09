/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 19 - "Dopasuj nawiasy"
*/

/*
* Cel zadania
*------------
* Otrzymując stringa zawierającego nawiasy kwadratowe [], klamry {} lub nawiasy okrągłe (), upewnij się że wszystkie z par są dopasowane i prawidłowo zagnieżdżone. Jeżeli wszystko się zgadza, zwróć true. W przypadku wykrycia błędów, zwróc false.
*
* Przykład: '[{()}]' => true
* Przykład: '[{]}' => false
*/

function checkBrackets(stringWithBrackets) {
	if(typeof stringWithBrackets !== 'string'){
		throw new Error(`Argument isn't a string.`)
	}
	if(stringWithBrackets.length % 2){return false;}
	const brackets = {
		opened: ["[","{", "("],
		closed: ["]","}", ")"]
	};
	let stringAsArr = stringWithBrackets.split('');
	let halfOfCroppedPartOfArr = 0;
	let result = [];
	let i = 0;
	while(i< stringAsArr.length / 2){

		const indexOfOpeningElement = brackets.opened.indexOf(stringAsArr[i]);

	
		if(indexOfOpeningElement === - 1){
			result.push(false);
			break;
			} else {
			
			if(stringAsArr[stringAsArr.length-i-1] === brackets.closed[indexOfOpeningElement]){
				
				result.push(true);
				
			} else {
				
				const isNextElClosing = stringAsArr[i+1] === brackets.closed[indexOfOpeningElement];

				const prevBracket = stringAsArr[stringAsArr.length-2]
				
				const indexOfPrevBracket = brackets.opened.indexOf(prevBracket);
			
				const isLastAndPrevMatching = brackets.closed[indexOfPrevBracket] === stringAsArr[stringAsArr.length-1];

				
				if(isNextElClosing){
					result.push(true); 
					stringAsArr = stringAsArr.slice(i+2);
					halfOfCroppedPartOfArr++;
					i=-1;
					} 
					else if(isLastAndPrevMatching){
						result.push(true); 
						stringAsArr = stringAsArr.slice(0,stringAsArr.length-3);
						halfOfCroppedPartOfArr++;
						i=-1;
					} else {
						result.push(false);
					}
			}
		}
	i++;
	}
	
	const firstCondition = result.length === (stringAsArr.length / 2 + halfOfCroppedPartOfArr);
	
	const SecondCondition = result.every(item => item === true);
	return firstCondition && SecondCondition;
	
}


/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(checkBrackets("[{()}]"), true);
verify(checkBrackets("[{]}"), false);
verify(checkBrackets("()[{}]"), true);
verify(checkBrackets("{[(]}}"), false);
verify(checkBrackets("[{()]}"), false);
verify(checkBrackets("[]{})("), false);
verify(checkBrackets("()([{})]"), false);

verify(checkBrackets("[{(}]"), false);
verify(checkBrackets("[{}]()"), true);