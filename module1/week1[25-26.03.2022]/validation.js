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
//posted on 25.03.2022 https://replit.com/@moreelz4it/walidacja#index.js
function validatePassword(password) {
	const signs = ["!", "@", "#"];
	let results = [];
	if(typeof password === 'string'){
		if(password.length >=3 && password.length<=10) results.push(true);
		if(password.split('').some(passIt => signs.some(signIt =>passIt ===signIt))) results.push(true);
		if(/\d/g.test(password)) results.push(true);

		if(results.length === 3 && results.every(it => it === true)) return true;
		return false;
	}
		else{
		return `Error: value don't have type string`;
		}
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