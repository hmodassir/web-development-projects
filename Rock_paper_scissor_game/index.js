let userResult = document.getElementById("user-result");
let compResult =  document.getElementById("comp-resutl")
let winner = document.getElementById("winner-result")
let user_point_el = document.getElementById("user-point")
let comp_point_el = document.getElementById("computer-point")
let user_point = 0
let comp_point = 0


let you  = "You: "

function rock_btn() {
  userResult.textContent = you + "Rock"
  user_choose = "Rock"  
  let rps_arr = ["Rock", "Paper", "Scissor"];
  let rps_random = Math.floor(Math.random() * rps_arr.length);
  rps_comp = rps_arr[rps_random]
  compResult.textContent ="computer: " +rps_comp
  ans= whowon(user_choose,rps_comp)
  winner.textContent=ans
}

function whowon(userResult,compResult){
  if(userResult===compResult){
    return "tie";
  }
  else if(compResult==="Rock"){
    if(userResult=="Paper"){
      return "won";
    }else{
      return "lost";
    }
  }else if(compResult==="Paper"){
    if(userResult=="Scissor"){
      return "won";
    }else{
      return "lost";
    }
  }
  else if(compResult==="Scissor"){
    if(userResult=="Rock"){
      return "won";
    }else{
      return "lost";
    }
  }
}

function scissor_btn(){
  userResult.textContent = you + "Scissor"
  user_choose = "Scissor"
  let rps_arr = ["Rock", "Paper", "Scissor"];
  let rps_random = Math.floor(Math.random() * rps_arr.length);
  rps_comp = rps_arr[rps_random]
  compResult.textContent ="Computer: " +rps_comp
  ans= whowon(user_choose,rps_comp)
  winner.textContent=ans
  
}

function paper_btn(){
  user_choose = "Paper"
  userResult.textContent = you+"Paper"
  
  let rps_arr = ["Rock", "Paper", "Scissor"];
  let rps_random = Math.floor(Math.random() * rps_arr.length);
  rps_comp = rps_arr[rps_random]
  compResult.textContent ="computer: " +rps_comp
  ans= whowon(user_choose,rps_comp)
  winner.textContent=ans
  // if(rps_comp.toLowerCase() === "rock"){
  //   winner.textContent = "You Win!"
  //   user_point++
  // }else if(rps_comp.toLowerCase() === "scissor"){
  //   winner.textContent = "You Loose!"
  //   comp_point++
  // }else if(rps_comp.toLowerCase() === "paper"){
  //   winner.textContent = "Draw!"
  // }
  your_point_text = "Your Points: "
  comp_point_text = "Computer Points: "
  user_point_el.textContent = your_point_text + user_point
  comp_point_el.textContent =comp_point_text +  comp_point
}
