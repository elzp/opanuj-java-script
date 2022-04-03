import checkCardNumber from "./cardValidation.js";
import data from "./exampleNumbers.js";

const input = document.getElementsByTagName("input");
const result = document.getElementById("result");
const button = document.getElementById("check");

button.addEventListener('click', ()=>{
    if(input[0].valueAsNumber){
    
    result.innerText = checkCardNumber(input[0].valueAsNumber);
    input[0].value = "";}
})


const website = document.getElementById("website");
website.innerText = data.website;
website.href = data.website;
const details = document.getElementById("details");
let htmlToDetailsElement = [];
Object.entries(data.numbers).forEach((item)=>{
    const listOfNo = item[1].map(item2=>`<div>${item2}</div>`);

    const elementForDetails = `<div>
        <h3>${item[0]}</h3>
        <div>${listOfNo.join("\n")}</div>
    </div>`
    htmlToDetailsElement.push(elementForDetails)
})
details.innerHTML = htmlToDetailsElement.join('')
