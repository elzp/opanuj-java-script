/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 11 - Thing inside the box
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, sprawdzającą czy pudełko jest puste.
*
*
*/
// posted https://replit.com/@moreelz4it/Thing-inside-the-box#index.js
function thing(box) {
	if(typeof box !== 'string') {
		throw new Error('Argument have to have string type.')
	}
	const boxAsArr = box.split("")
	const isSthOtherThenBox = boxAsArr.indexOf('o') !== -1;
	if(!isSthOtherThenBox){
		return false;
	} else{
		const positionOfThing = boxAsArr.indexOf("o")

		if(positionOfThing>=0){
			const stateBeforeThing = boxAsArr[positionOfThing - 1]==='\t' | boxAsArr[positionOfThing-1] === undefined;
			
			const stateAfterThing = boxAsArr[positionOfThing+1]==='\n' | positionOfThing === boxAsArr.length - 1;
			
			const isThingStartOrEndLine = stateBeforeThing | stateAfterThing;
				
			if(isThingStartOrEndLine){
				return false;
			} else {return true}
		}

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

verify(thing(`*****
              *   * o
              *   *
              *****`), false);

verify(thing(`*****
              * o *
              *   *
              *****`), true);

 verify(thing(`*****
               *   *
               *   *
               *****`), false);

 verify(thing( `*****
		    	o *   *
                *   *
                *****`), false);
 verify(thing(`o *****
    		 	 *   *
              	 *   *
                 *****`), false);