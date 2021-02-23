const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let match = "|"
let empty = " "
let line1 = 1
let line2 = 3
let line3 = 5
let line4 = 7
let display1 = [empty.repeat((7 - line1)/2),match.repeat(line1),empty.repeat((7 - line1)/2)].join('')
let display2 = [empty.repeat((7 - line2)/2),match.repeat(line2),empty.repeat((7 - line2)/2)].join('')
let display3 = [empty.repeat((7 - line3)/2),match.repeat(line3),empty.repeat((7 - line3)/2)].join('')
let display4 = [empty.repeat((7 - line4)/2),match.repeat(line4),empty.repeat((7 - line4)/2)].join('')
let CanPlay = new Boolean(true)
let Red= "\x1b[31m"
let Yellow = "\x1b[33m"

board = `\n
*********
*${display1}*
*${display2}*
*${display3}*
*${display4}*
*********\n`


function LineTest(line){
        if (eval("line"+line) > 0) {
            CanPlay = true
        }
        else{
            console.log(`Sorry Line ${line} is Empty, please choose an other line`);
            CanPlay = false
        }
}

function Lost(){
    if (line1 == 0 && line2 == 0 && line3 == 0 && line4 == 0 ) {
        console.log(`You lost, too bad..`);
        rl.close()
        process.exit()
    }
}


function MatchesDelete(line , matches){

    eval("line"+line + "-="+ matches) //NOTE this means exemple line2 -= matches
    // console.log(eval("line"+line));
    if (line1 % 2) {
        display1 = [empty.repeat((7 - line1)/2),match.repeat(line1),empty.repeat((7 - line1)/2)].join('')
        
    }else{
        display1 = [empty.repeat((7 - line1)/2),match.repeat(line1),empty.repeat((7 - line1)/2),empty].join('')
    }
    if (line2 % 2) {
        display2 = [empty.repeat((7 - line2)/2),match.repeat(line2),empty.repeat((7 - line2)/2)].join('')
        
    }else{
        display2 = [empty.repeat((7 - line2)/2),match.repeat(line2),empty.repeat((7 - line2)/2),empty].join('')
    }
    if (line3 % 2) {
    display3 = [empty.repeat((7 - line3)/2),match.repeat(line3),empty.repeat((7 - line3)/2)].join('')
        
    }else{
        display3 = [empty.repeat((7 - line3)/2),match.repeat(line3),empty.repeat((7 - line3)/2),empty].join('')
    }
    if (line4 % 2) {
        display4 = [empty.repeat((7 - line4)/2),match.repeat(line4),empty.repeat((7 - line4)/2)].join('')
        
    }else{
        display4 = [empty.repeat((7 - line4)/2),match.repeat(line4),empty.repeat((7 - line4)/2),empty].join('')
    }

    board = `\n
*********
*${display1}*
*${display2}*
*${display3}*
*${display4}*
*********\n`

        return console.log(Red , board);

}

function AITurn(){
        if (line1 == 0 && line2 == 0 && line3 == 0 && line4 == 0 ) {
            console.log(`I lost.. snif.. but I’ll get you next time!!`);
            rl.close()
            process.exit()
        }
        // if (line1 > 0 && line2 > 0 && line3 > 0 && line4>0) {
            let AILine = Math.floor(Math.random()*4)+1
            if (eval("line"+AILine) > 0) {
                let AIMatches = eval("Math.floor(Math.random()*line"+ AILine + ")+1")
                console.log(Yellow , `I Played Line : ${AILine} and took ${AIMatches} matches. BEEEP`);
                console.log(line1 , line2 , line3 , line4);
                MatchesDelete(AILine , AIMatches)
                Lost()
                console.log("Please enter a Line :");
            }else{
                AITurn()
            }
        // }
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
                    console.log("AI's Turn. Please wait.");
                    console.log(Yellow ,"BEEPP BOP LOADING ....");
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