/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 2 - "Walidacja"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która sprawdzi, czy przekazane hasło spełnia określone warunki:
*
* a) Ma długość od 3 do 10 znaków
* b) Zawiera jeden ze znaków specjalnych - !, @ lub #
* c) Zawiera cyfrę
*
* Przykład:
* validatePassword('test') // => false
* validatePassword('test11!') // => true
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/
// on 28.03.2022 after code review moved original code to 
// https://replit.com/@moreelz4it/walidacja-1#index.js
// and to https://replit.com/@moreelz4it/walidacja-1#index.js add above code.
function validatePassword(password) {
	const signs = ["!", "@", "#"];
	if(typeof password !== 'string'){
		throw new Error(`Argument don't have type string.`)
		}
		
	// second way
	const results = [password.length >=3, password.length<=10,
					 password.split('').some(passIt => signs.some(signIt =>passIt === signIt)), /\d/g.test(password)];
		return results.every(it => it === true);
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(validatePassword(''), false);
verify(validatePassword('lol'), false);
verify(validatePassword('ToDziala1#'), true);