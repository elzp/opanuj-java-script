/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 13 - "Izogram"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję sprawdzającą czy podane słowo jest izogramem, czyli słowem w którym każda litera występuje tylko jeden raz.
*
*
* Przykład:
* isogram('Izogram'); // => true
* isogram('Przeprogramowani'); // => false
* 
*/
// posted https://replit.com/@moreelz4it/Izogram#index.js
function isogram(word) {
	if(typeof word !== "string"){
		throw new Error("Argument must have a string type.")
	}
	let wordInArray = word.toLowerCase().split('');

	for(let t=0; t<wordInArray.length; t++){		
		const filtered = wordInArray.filter(item=>
			{return item === wordInArray[t]}).length;
		if(filtered > 1) {return false}
	}
	return true;
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(isogram('izogram'), true);
verify(isogram('Przeprogramowani'), false);
verify(isogram('SprawdzAm'), false);
verify(isogram('coś'), true);