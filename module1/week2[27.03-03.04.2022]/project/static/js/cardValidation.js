const typesOfCards = [
    {
        name: "Mastercard",
        fronts: [51, 52, 53, 54, 55],
        length: [16],
     },
        {
        name: "Visa",
        fronts: [4],
        length: [13, 16]
     },
        {
        name: "American Express",
        fronts: [34, 37],
        length: [15]
     }
    ]
        
    function checkFrontNo(numbersAsString, cardLength) {
        if (typeof numbersAsString !== 'string' || numbersAsString.length > 2){
            throw new Error("First argument is not string type or it's length is more then 2.")
        }
        if(typeof cardLength !== 'number'){
            throw new Error("Second argument is not a number.")
        }
        let cardType = "Nieprawidłowy";
        typesOfCards.forEach((item)=>{
    
            const isFrontMatches = item.fronts.some(front => {
                if(item.name === "Visa") {return front.toString() === numbersAsString.charAt(0)} 
                else {return front.toString() === numbersAsString}
            })
    
            if(isFrontMatches) {
                const isLengthMatches = item.length.some(lengthValue => {
                    return lengthValue === cardLength})
                if(isLengthMatches){cardType = item.name}
            }
        })
        return cardType;
    }
    
    function luhna(arrOfNumbers){
        let sumOfEvenNumbers = 0;
        let sumOfOddNumbers = 0;
        
        function doubleAddition(condition, total, current){
            if(condition){
                const doubled = (current*2).toString().split('').length >1 ? new Number((current*2).toString().charAt(0)) + new Number((current*2).toString().charAt(1)) : current*2
                return total + doubled;
            } else {
                sumOfEvenNumbers = sumOfEvenNumbers + current; return total;
            }
        }
        
        if(arrOfNumbers.length % 2){
        sumOfOddNumbers = arrOfNumbers.reduce((total, current, index)=>{
            return doubleAddition(index % 2, total, current)
        }, 0)
        } 
        else {
            sumOfOddNumbers = arrOfNumbers.reduce((total, current, index)=>{
                return doubleAddition(!(index % 2), total, current)
            }, 0)		
        }
        
        return !((sumOfEvenNumbers + sumOfOddNumbers) % 10);	
    }
    
    
export default function checkCardNumber(cardNumber){
        if(typeof cardNumber !== "number") {
            throw new Error('Argument has to be number type.');
        }
        const numberAsArrOfStrings = cardNumber.toString().split('');
        const arrLength = numberAsArrOfStrings.length;
    
            const twoFrontNumbers = numberAsArrOfStrings.slice(0,2).join('');
        let typeBasedOnFront = checkFrontNo(twoFrontNumbers, arrLength);
        const arrayOfNumbers = numberAsArrOfStrings.map(item => new Number(item) );
        
        if(luhna(arrayOfNumbers)){
            return typeBasedOnFront
        } else {
            return "Nieprawidłowy"
        }
        
    }