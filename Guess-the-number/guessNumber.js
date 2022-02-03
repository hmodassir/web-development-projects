let final_number = Math.floor(Math.random()*100)+1
let final_number_display = document.getElementById("final_number_display")
let display_el = document.getElementById("display")
let chance_el = document.getElementById("user_chance")
let chance = 10
let chance_text = "Chance Left: "
chance_el.textContent = chance_text + chance
let gameOver = false 


function checking(user_number){
  
  if(user_number == 0){
    display_el.textContent= "Please enter a number"
  }
  else if(final_number == user_number){
    gameOver = true
 
    display_el.textContent = "You got it correct!"
  }else if(user_number < final_number){
    if(user_number < final_number && user_number >= final_number-5){
      display_el.textContent = "you are too close!, guess a little greater number"
    }else{
    display_el.textContent = "Guess a greater number"
  }
  }else if(user_number > final_number){
    if(user_number >final_number && user_number <=final_number+5){
      display_el.textContent = "You are too close!, guess a little smaller number"
    }else{
      display_el.textContent = "Guess a lesser number"
    }
  }
}

  
  function enter_btn(){
  let user_number = document.getElementById("number").value
   if(chance<=1){
   final_number_display.textContent="The Number Was "+ final_number
  }
  if(chance >0){
  checking(user_number)
  chance--;
  
  chance_el.textContent = chance_text + chance
  }
    
  }
  
function start_again(){
  if(gameOver == true || chance === 0){
  final_number_display.textContent= '';
  display_el.value='';
  document. getElementById("number").value=null
  
 final_number = Math.floor(Math.random()*100)+1
  chance = 11
    enter_btn()}
  
}
