/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 21 - "HTML String" & "Abstract Syntax Trees" project
*/

/*
* Cel zadania
*------------
* To zadanie stanowi wstęp do projektu "Abstract Syntax Trees" https://przeprogramowani.pl/opanuj-javascript_ast.pdf. Zacznij od zapoznania się z jego wprowadzeniem i opisem.
*
* Twoim rozgrzewkowym zadaniem jest napisanie funkcji, która przekonwertuje pojedynczy obiekt AST na HTML String.
*
* Przykład: convertAstToHtmlString({ 
“nodeType”: “element”, “tagName”: “div”,
“attributes”: [ { “name”: “class”, “value”: “test” }],
“children”: [ “nodeType”: “text”, “value”: “Hello world!”]
}) => "<div class="test">Hello world!</div>"
* 
* 
*/

function convertAttributes(attributesArray){

	let attributesAsString = attributesArray
			.map(item => `${item.name}="${item.value}"`)
		
	attributesAsString.unshift('')
	
	return attributesAsString.join(' ');
}



function convertAstToHtmlString(childObject) {
	
	switch(childObject.nodeType){	

		case 'text':
			return `${childObject.value}`;

		default:

			let childsAttributes = '';
			
			if(childObject.attributes.length > 0) {
					childsAttributes = convertAttributes(childObject.attributes);
			} 

			let childrenAsString = '';

            if(childObject.children){
                    childrenAsString = childObject.children.map(child =>{
                    const childAsString = convertAstToHtmlString(child);
                    return childAsString })
                .join('')
            }

			return `<${childObject.tagName}${childsAttributes}>${childrenAsString}</${childObject.tagName}>`
	}
}


/* Weryfikacja */
function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(convertAstToHtmlString(
  { 
    "nodeType": "element", "tagName": "div",
    "attributes": [ { "name": "class", "value": "test" } ],
    "children": [ { "nodeType": "text", "value": "Hello world!" }]}), '<div class="test">Hello world!</div>');

verify(convertAstToHtmlString(
  { 
    "nodeType": "element", 
		"tagName": "div",
    "attributes": [ { "name": "class", "value": "test" } ],
    "children": [ 
			{ 
    "nodeType": "element", 
		"tagName": "div",
    "attributes": [],
    "children": [ 
			{ "nodeType": "text", "value": "Hello world!" },
		]},
		{ 
    "nodeType": "element", 
		"tagName": "div",
    "attributes": [ { "name": "class", "value": "test2" } ],
    "children": [ 
			{ "nodeType": "text", "value": "co?" },
		]}
		]}), '<div class="test"><div>Hello world!</div><div class="test2">co?</div></div>');

const newAst = {
  "ast": {
    "nodeType": "element",
    "tagName": "div",
    "attributes": [
      {
        "name": "class",
        "value": "profile"
      }
    ],
    "children": [
      {
        "nodeType": "element",
        "tagName": "img",
        "attributes": [
          {
            "name": "class",
            "value": "profile__avatar"
          },
          {
            "name": "src",
            "value": "https://www.thispersondoesnotexist.com/image"
          },
          {
            "name": "alt",
            "value": "Avatar"
          }
        ]
      },
      {
        "nodeType": "element",
        "tagName": "div",
        "attributes": [
          {
            "name": "class",
            "value": "profile__details"
          }
        ],
        "children": [
          {
            "nodeType": "element",
            "tagName": "p",
            "attributes": [
              {
                "name": "class",
                "value": "profile__name"
              }
            ],
            "children": [
              {
                "nodeType": "text",
                "value": "John Doe"
              }
            ]
          },
          {
            "nodeType": "element",
            "tagName": "p",
            "attributes": [
              {
                "name": "class",
                "value": "profile__phone"
              }
            ],
            "children": [
              {
                "nodeType": "text",
                "value": "+48 123 456 789"
              }
            ]
          },
          {
            "nodeType": "element",
            "tagName": "p",
            "attributes": [
              {
                "name": "class",
                "value": "profile__link"
              }
            ],
            "children": [
              {
                "nodeType": "element",
                "tagName": "a",
                "attributes": [
                  {
                    "name": "href",
                    "value": "https://przeprogramowani.pl/o-nas"
                  }
                ],
                "children": [
                  {
                    "nodeType": "text",
                    "value": "Zobacz więcej"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}


const stringified = '<div class="profile"><img class="profile__avatar" src="https://www.thispersondoesnotexist.com/image" alt="Avatar"></img><div class="profile__details"><p class="profile__name">John Doe</p><p class="profile__phone">+48 123 456 789</p><p class="profile__link"><a href="https://przeprogramowani.pl/o-nas">Zobacz więcej</a></p></div></div>'
const converted = convertAstToHtmlString(newAst.ast)

verify(converted, stringified)