let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choices");
const msg=document.querySelector("#msg");

const userScoreParaa=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genComputerChoice= () => {
    const options =["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const drawGame=() =>{
    console.log("Draw Game!");
    msg.innerText="Game Draw! Play Again.";
    msg.style.backgroundColor="#081b31";

}

const showWinner=(userWin,userchoiceId,compChoice) =>{
    if(userWin){
        userScore++;
        userScoreParaa.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`You Win! Your ${userchoiceId} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose!");
        msg.innerText=`You Lose! ${compChoice} beats your ${userchoiceId}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userchoiceId) =>{
    console.log("user choice =",userchoiceId);
    //Generate computer choice
    const compChoice=genComputerChoice();
    console.log("comp choice =",compChoice);

    if(userchoiceId === compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin =true;
        if(userchoiceId === "rock"){
            //scissor,paper
            userWin= compChoice==="paper"? false:true;
        }else if(userchoiceId==="paper"){
            //rock,scissors
            userWin= compChoice==="scissors"? false:true;
        }else{
            //rock, paper
            userWin= compChoice==="rock"? false:true;
        }
        showWinner(userWin,userchoiceId,compChoice);
    }
};

choices.forEach((ch)=>{
    // console.log(choice);
    ch.addEventListener("click",()=>{
        const userchoiceId=ch.getAttribute("id");
        playGame(userchoiceId);
    });
});

