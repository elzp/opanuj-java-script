/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 3 - "Przeplatanie"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która dla dwóch podanych parametrów wykona "przeplatanie"
* - używając kolejnych cyfr parametrów połączy je w jeden string.
*
* Przykład:
* zipIt(111, 222) // => '121212'
* zipIt(123, 456) // => '142536'
* zipIt(12, 5555) // => '152555'
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazane parametry są typu number. Jeśli parametry nie
* spełniają tego warunku, funkcja powinna rzucić wyjątek.
*/
// posted on 26.03.2022 https://replit.com/@moreelz4it/przeplatanie#index.js
function zipIt(first, second) {
	let result=[];
	if(typeof first === "number" && typeof second === "number"){
		let firstArr = first.toString().split("");
		let secArr = second.toString().split("");
		
		firstArr.forEach((it, ind) => result.push(it, secArr[ind]));
		if(firstArr.length<secArr.length){
			let rest = secArr.slice(firstArr.length);
			result = [...result, ...rest]
		}
		result = result.join("");	
		
	}else{
		result="Both arguments must be of type number."
	}
	 
  return result;
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(zipIt(111, 222), '121212');
verify(zipIt(123, 456), '142536');
verify(zipIt(12, 5555), '152555');
verify(zipIt(5555, 12), '515255');