/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 1 - "Odwróć to"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która odwróci przekazany do niej string.
*
* Przykład:
* reverseMe('abc') // => 'cba'
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/
// posted on 25.03.2022 here https://replit.com/@moreelz4it/odwroc-to
function reverseMe(input) {
	let result=[];
	if(typeof input === 'string'){
		const inputArr = input.split('');
		// one way:
		// inputArr.forEach((it, index)=>{
		// 	index === 0 ? result.push(it): result.unshift(it);
		// })
		//another way:
		result = inputArr.reverse()
		result = result.join('');
		
	}else{
		result=`Error: podany argument nie jest zmienną typu 'string'.`
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

verify(reverseMe('a'), 'a');
verify(reverseMe('abc'), 'cba');
verify(reverseMe('Przeprogramowani'), 'inawomargorpezrP');
verify(reverseMe('Brawo!'), '!owarB');
console.log(reverseMe(3457))