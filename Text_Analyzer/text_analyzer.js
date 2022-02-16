let userInput = document.getElementById("user_input");
let capitalLetterCount = 0
let smallLetterCount = 0
let numbersCount = 0
let charactersCount = 0
let spacesCount = 0
// <span style='color:#ff0000'>hi</span>";
let display_el = document.getElementById("display")
let resutl_el= document.getElementById("resutl")
let capitalLetterText = "Capital letter: "
let smallLetterText = "Small letter: "
let numbersText = "Numbers: "
let spaceText = "Spaces: "
function btn(){
  numbersCount = 0
  charactersCount = 0
  smallLetterCount = 0
  capitalLetterCount = 0 
  spacesCount = 0 
  charactersCount =0
  for(let i=0;i<userInput.value.length;i++){
    if(userInput.value.codePointAt(i)>=65 & userInput.value.codePointAt(i)<=90){
      capitalLetterCount++;
    }else if (userInput.value.codePointAt(i)>=97 && userInput.value.codePointAt(i)<=122){
      smallLetterCount++;
    }else if(userInput.value.codePointAt(i)>=48 && userInput.value.codePointAt(i)<=57){
      numbersCount++;
    }else if((userInput.value.codePointAt(i) >= 33 && userInput.value.codePointAt(i)<=47) || (userInput.value.codePointAt(i)>=58 && userInput.value.codePointAt(i)<=64)){
      charactersCount++;
    }else if(userInput.value.codePointAt(i) == 32){
      spacesCount++;
    }
  }

  display_el.textContent =capitalLetterText +  capitalLetterCount + ", " + smallLetterText +  smallLetterCount + ", " + numbersText + numbersCount +", " + "characters "+charactersCount +", "+ spaceText + spacesCount;
  
}
