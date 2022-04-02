// posted on 27.03.2022 https://replit.com/@moreelz4it/proj-szyfr-cezara#index.js
"use strict"
function encryptLetter(min, max, letterCode){

	const isArgsNotNumbers = [...arguments].every(item => typeof item !=='number');
	if(isArgsNotNumbers){
		throw new Error('Min. one of arguments is not a string type.');
	}
	let codeOfEncryptedLetter =(letterCode + 13) % (max);
	
	if(codeOfEncryptedLetter < min && codeOfEncryptedLetter > 0){
		codeOfEncryptedLetter=codeOfEncryptedLetter + (min - 1);
	}
	if(codeOfEncryptedLetter === 0) {
		codeOfEncryptedLetter = max;
	}
	
	return String.fromCharCode(codeOfEncryptedLetter);
}

const caesar13 = (string) => {
	if(typeof string !== 'string'){
		throw new Error('Argument is not a string type.');
	}
	
	const alphabetData = {min: 'a'.charCodeAt(0), max: 'z'.charCodeAt(0)};
	
	if(typeof string !== 'string') return `Argument of function must be a string type.`;
	let stringArr = string.split('');

	let result = [];
	
	stringArr.forEach((item)=>{
			const toLowercaseCode =  item.toLowerCase().charCodeAt(0)
			const isItNotLetter = toLowercaseCode<alphabetData.min || toLowercaseCode> alphabetData.max;
			if(isItNotLetter){
				result.push(item);
			}else{
			const encryptedCodeOfLetter = encryptLetter(alphabetData.min, alphabetData.max, toLowercaseCode);
			
			if(item === item.toUpperCase()){ 
				result.push(encryptedCodeOfLetter.toUpperCase());
			}else{
				result.push(encryptedCodeOfLetter);
			}
		}
	})

	return result.join('');
}

function verify(input, goal) {
  if (input === goal) {
console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(caesar13('PRZEPROGRAMOWANI'), 'CEMRCEBTENZBJNAV');
verify(caesar13('PRZEPROGRAMOWaNI'), 'CEMRCEBTENZBJnAV');
verify(caesar13('.67ZEPROGR8MOWaNI'), '.67MRCEBTE8ZBJnAV');
// export caesar13;