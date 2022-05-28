// let drumButton = document.querySelectorAll('.drum').length

// for(let i =0;i<=drumButton;i++){
//     document.querySelectorAll('button')[i].addEventListener('click',function(){
//         alert('i clicked button')
//     })
// }

const btnA = document.querySelector('.key-a')
const btnS = document.querySelector('.key-s')
const btnD = document.querySelector('.key-d')
const btnH = document.querySelector('.key-h')
const btnJ = document.querySelector('.key-j')
const btnK = document.querySelector('.key-k')





function snare() {

    let snareSound = new Audio('sound/snare.mp3')
    snareSound.play();
    btnA.style.color = "dodgerblue"
    btnA.style.backgroundColor = "white"


}

function crash() {

    let crashSound = new Audio('sound/crash.mp3')
    crashSound.play()
    btnJ.style.color = "dodgerblue"
    btnJ.style.backgroundColor = "white"
    


}

function hitHat() {

    let hitHatSound = new Audio('sound/hit hat.mp3')
    hitHatSound.play()
    btnS.style.color = "dodgerblue"
    btnS.style.backgroundColor = "white"
    
}

function tom3() {

    let tom3Sound = new Audio('sound/tom-3.mp3')
    tom3Sound.play();
    btnD.style.color = "dodgerblue"
    btnD.style.backgroundColor = "white"
    
}

function tom4() {

    let tom4Sound = new Audio('sound/tom-4.mp3')
    tom4Sound.play()
    btnK.style.color = "dodgerblue"
    btnK.style.backgroundColor = "white"
    
}
function kick(){
    let kickSound = new Audio('sound/kick1.mp3')
    kickSound.play()
    btnH.style.color = "dodgerblue"
    btnH.style.backgroundColor = "white"
}


window.addEventListener('keydown', function(e) {
    switch (e.code) {   
        
        case "KeyH":
            kick()
            break;
        case "KeyS":
            hitHat()
            break;
        case "KeyA":
            snare()
            break;
        case "KeyD":
            tom3()
            break;
        case "KeyJ":
            crash()
            break;
        case "KeyK":
            tom4()
            break;
        
    
        

    }
})








window.addEventListener('keyup',function(){
    const buttonL = document.querySelectorAll('.btn').length
    for(let i=0;i<buttonL;i++){
        document.querySelectorAll('.btn')[i].style.color ='white'
        document.querySelectorAll('.btn')[i].style.backgroundColor = 'dodgerblue'
    }
    
})

window.addEventListener('mouseup',function(){
    const buttons = document.querySelectorAll('.btn').length
    for(let i=0;i<buttons;i++){
        document.querySelectorAll('.btn')[i].style.color ='white'
        document.querySelectorAll('.btn')[i].style.backgroundColor = 'dodgerblue'
    }
    
 })
// btnA.addEventListener('click',function(){
//     snare()
// })

btnA.addEventListener('click',function(){
    
    snare()
})

btnS.addEventListener('click',function(){
    hitHat()
})

btnD.addEventListener('click',function(){
    tom3()
})

btnH.addEventListener('click',function(){
    kick()
})

btnJ.addEventListener('click',function(){
    crash()
})

btnK.addEventListener('click',function(){
    tom4()
})
