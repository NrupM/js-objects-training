//make a function that splits the letter characters
function letterCount(string){
  let countedLetters = {};
  let splitString = string.split("");
  splitString.forEach(function makeKeyValue(character){
    countedLetters[character]
    ?
    countedLetters[character] += 1
    :
    countedLetters[character] = 1;
  });

  return countedLetters;

}
console.log(letterCount("apple"));
//created an array of letter strings

//make a function  that iterates over the new array and puts that value as a key in our object
