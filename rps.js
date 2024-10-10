let choices=['rock','paper','scissors']
let playerdisplay = document.getElementById("playerdisplay")
let computerdisplay = document.getElementById("computerdisplay")
let resultdisplay = document.getElementById("resultdisplay")
let playerscoredisplay = document.getElementById("playerscoredisplay")
let computerscoredisplay = document.getElementById("computerscoredisplay")
let computerchoice
let result
let playerscore=0;
let computerscore=0;


function playgame(playerchoice){
   computerchoice = choices[Math.trunc(Math.random()*3)]
   playerdisplay.textContent =`Player Choice: ${playerchoice}`
   computerdisplay.textContent =`Computer Choice: ${computerchoice}` 
    if(computerchoice === playerchoice)
    {
        resultdisplay.style.color=""
        resultdisplay.textContent="TIE!!";
    }
    else{
        switch(playerchoice){
            case "rock":
                result = computerchoice==="scissors" ? "You Win!!" : "You Lose!!"
                break
            case "paper" :
                result = computerchoice==="rock" ? "You Win!!" : "You Lose!!"
                break
            case "scissors" :
                result = computerchoice==="paper" ? "You Win!!" : "You Lose!!"
                break
            }
            switch(result){
                case "You Win!!":
                    playerscore++
                    resultdisplay.style.color="rgb(91, 248, 136)"
                    break
                case "You Lose!!":
                    computerscore++
                    resultdisplay.style.color="rgb(255, 67, 67)"
                    break    
            }
            console.log(playerscore);
            playerscoredisplay.textContent=`Player Score: ${playerscore}`
            computerscoredisplay.textContent=`Computer Score: ${computerscore}`
            resultdisplay.textContent =`${result}`
    }

}