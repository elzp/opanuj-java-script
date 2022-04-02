/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 12 - "Mr. Elliot"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję zmieniającą tekst na pozdrowienia od Mr. Elliota, według przykładu.
*
*
* Przykład:
* greetings('hacker'); // => 'H4Ck3r'
* greeting('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
* greeting('Saving The World'); // => 'S4V1Ng tHe w0rLd'
* 
*/
// posted https://replit.com/@moreelz4it/Mr-Elliot#index.js
function greeting(message) {
	if(typeof message !== "string"){
		throw new Error("Argument must have a string type.")
	}
		let firstPart = message;
	const maping = {
		a: "4",
		e: "3",
		i: "1",
		o: "0",
		s: "5",
	}
	for([key, value] of Object.entries(maping)){
		const regExp = new RegExp(key, "ig");
		firstPart = firstPart.replace(regExp, function replacer(){return value});
	}
	let messageAsArr = firstPart.split("");
	const secondPart = messageAsArr.map((item, index)=>{
		if(index % 2){ return item.toLowerCase();} else {
			return item.toUpperCase();
		}
	})

		// jeżeli jest 
		// na końcu wyrazu brak modyfikacji
	
  return secondPart.join("");
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(greeting('hacker'), 'H4Ck3r');
verify(greeting('Control Is An Illusion'), 'C0NtR0L 15 4N 1lLu510n');
verify(greeting('Saving The World'), '54V1Ng tH3 w0rLd');