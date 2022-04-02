/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 5 - "Pangram"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która sprawdzi, czy podany parametr to tzw. pangram.
*
* Pangram to możliwe do zrozumienia zdanie wykorzystujące wszystkie litery danego alfabetu.
*
*
* Przykład:
*
* isPangram('test') // => false
* isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!') // => true
*/

/*
* Punkty dodatkowe
*-----------------
* Zweryfikuj, czy konkretna litera występuje w podanym zdaniu tylko jeden raz.
*/
// posted on 26.03.2022  https://replit.com/@moreelz4it/pangram#index.js
function isPangram(sentence) {
	//array without spaces and punctuation signs
	let sentenceArr = sentence.match(/[\wąęłńóśćźż]/g);
	let timesOfUsage =[];
	//fill timesOfUsage array 
	sentenceArr.forEach((it, ind) =>{
 		let moreThenOnce = sentenceArr.filter(it2 => it2 === it);
		timesOfUsage[ind] = moreThenOnce.length;
	})

	//how many characters was used once
	const allUsedOnceCount = timesOfUsage.reduce((prev, next)=> {
		if(next === 1) prev+=next;
		return prev;
	}, 0)
	//number of letters in sentence not counting duplicates
	let lettersWithoutDuplicatesCount =  allUsedOnceCount;	

	//number of characters which was used more then once
	const allUsedMore = timesOfUsage.map((it, id) => {if(it!== 1) return  sentenceArr[id]}).filter(it=> it!==undefined)
	// array of duplicated letters
	 let arr = []
	allUsedMore.forEach((it, id)=>{
		if((id === 1) || !arr.some(it2 => it2 ===it)) arr.push(it)
	})
	
	if(!allUsedMore.length<=0) lettersWithoutDuplicatesCount += arr.length;

	return lettersWithoutDuplicatesCount === 32 ? true : false;
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(isPangram('test'), false);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!'), true);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małże!tt, kkk'), false);