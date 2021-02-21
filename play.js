const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let line1 = 1
let line2 = 3
let line3 = 5
let line4 = 7
let CanPlay = new Boolean(true)

board = `\n
*********
*   ${line1}   *
*   ${line2}   *
*   ${line3}   *
*   ${line4}   *
*********\n`


function LineTest(line){
        if (eval("line"+line) > 0) {
            return CanPlay = true
        }
        else{
            console.log(`Sorry Line ${line} is Empty, please choose an other line`);
           return CanPlay = false
        }
}


function MatchesDelete(line , matches){

    eval("line"+line + "-="+ matches) //NOTE this means exemple line2 -= matches
    // console.log(eval("line"+line));
    board = `\n
*********
*   ${line1}   *
*   ${line2}   *
*   ${line3}   *
*   ${line4}   *
*********\n`
}

function AITurn(){ //REVIEW A REVOIR
    let AILine = Math.floor(Math.random()*4)-1
    let AIMatches = eval("Math.floor(Math.random()*"+ AILine + "-1)")
    MatchesDelete(AILine , AIMatches)
}


console.log(board);
console.log("Please enter a Line :");
rl.on('line',(UserLine)=>{
    if (UserLine.trim() < 5 && UserLine.trim() > 0) {
        LineTest(UserLine)
        if (CanPlay) {
            rl.question('Number of matches : ', (UserMatches)=>{
                if (UserMatches.trim() > 0 && UserMatches.trim() <= eval("line"+UserLine) ) {   
                    MatchesDelete(UserLine , UserMatches)
                    console.log("\x1b[31m",board);
                    console.log("AI's Turn. Please wait.");
                    console.log("\x1b[33m","BEEPP BOP LOADING ....");
                    AITurn()
                }else{
                    rl.setPrompt(`Please choose a number between 1 and ${eval("line"+UserLine)}\nPlease enter a line : `)
                    rl.prompt()
                }
            })
        }
    }
    else {
        rl.setPrompt('Wrong \nPlease choose a number between 1 and 4 \nPlease enter a line : ');
        rl.prompt();

    }
})

rl.on('close',()=>{
    console.log('GAME OVER');
})