/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 18 - "Weryfikacja ISBN"
*/

/*
* Wprowadzenie
*------------
* Książki są identyfikowane przez numery ISBN-10. Numery te zwykle zawierają myślniki, i przykładowo wyglądają tak: 99921-58-10-7
*
* Na ISBN-10 składa się 9 cyfr (od 0 do 9) oraz jeden znak kontrolny (cyfra lub X). Znak kontrolny X reprezentuje liczbę 10. 
*
* Algorytm weryfikujący wygląda następująco:
* (x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) % 11 == 0
* 
*
* Przykład:
* Weźmy ISBN: 85-359-0277-5	
* (8 * 10 + 5 * 9 + 3 * 8 + 5 * 7 + 9 * 6 + 0 * 5 + 2 * 4 + 7 * 3 + 7 * 2 + 5 * 1) % 11 == 0
* Algorytm potwierdza poprawność tego ISBN-10
* 
* Cel zadania
*------------
* W oparciu o zaprezentowany powyżej algorytm, napisz funkcję sprawdzającą przekazany w formie stringa ISBN. Funkcja powinna obsłużyć ISBN z i bez myślników. 
*
*/

function checkISBN(isbn) {
	let result = 0;
	const isbnWithoutPunctualtion = isbn
		.match(/[\dX]/ig)
		.toString()
		.replace('X', 10)
		.split(',');
	const lengthOfISBN = isbnWithoutPunctualtion.length

	result = isbnWithoutPunctualtion
		.reduce((total,current, index) =>{
			return total += Number(current) * (lengthOfISBN - index)} , 0)
	
	return !(result % 11)
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

verify(checkISBN("85-359-0277-5"), true);
verify(checkISBN("3-04-013311-X"), true);
verify(checkISBN("8535902775"), true);
verify(checkISBN("99921-58-10-3"), false);
verify(checkISBN("9992158103"), false);