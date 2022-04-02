/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 7 - "Emoji"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję "useEmoji", która zastąpi wszystkie słowa danego parametru zgodnie 
* z mapowaniem z obiektu "emojiMappings";
*
* Przykład:
* useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!') // => 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!'
* useEmoji('Jadę po nowy samochód :D') // => 'Jadę po nowy 🏎 :D'
*/
// posted on https://replit.com/@moreelz4it/emoji#index.js
const emojiMappings = {
    'stop': '🚫',
    'gwiazda': '⭐️',
    'samochód': '🚗',
    'buduję': '🔨',
    'budzik': '⏰'
  };
  
  function useEmoji(input) {
      if(typeof input !== "string"){throw new Error('First argument must have string type.')}
      return function (object){
          if (Object.getPrototypeOf(object) !== Object.prototype) {
              throw new Error("second argument must be object literal without methods.")
          }
          let newinput = input;
          for (const [key, value] of Object.entries(object)){
      
              const RegExpsearchedWord = new RegExp("(?<= |\\W|^)"+key+"(?= |\\W|$)", "ig");
              const keyIsInInput = RegExpsearchedWord.test(input.toLowerCase());
      
              if(keyIsInInput){
                  newinput = newinput.replace(RegExpsearchedWord, function replacer(){ return value; })
              }
          }
      
        return newinput;
      }
  }
  
  try{
          useEmoji("Właśnie nadbuduję swoje skille w JS")('green');
  }catch(err){
      console.log(err);
  }
  /* Weryfikacja */
  
  function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(useEmoji("Takiemu zachowaniu mówię stop i to mocny estop!")(emojiMappings), "Takiemu zachowaniu mówię 🚫 i to mocny estop!");
  verify(useEmoji("Jadę po nowy samochód :D")(emojiMappings), "Jadę po nowy 🚗 :D");
  verify(useEmoji("Jadę po nowy samochódy :D")(emojiMappings), "Jadę po nowy samochódy :D");
  verify(useEmoji("Właśnie buduję swoje skille w JS")(emojiMappings), "Właśnie 🔨 swoje skille w JS");
  verify(useEmoji("Właśnie nadbuduję swoje skille w JS")(emojiMappings), "Właśnie nadbuduję swoje skille w JS");
  verify(useEmoji("Buduję samochód")(emojiMappings), "🔨 🚗");
  verify(useEmoji("BuDuję SaMocHód.")(emojiMappings), "🔨 🚗.");
  