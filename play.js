const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



let num1 = Math.floor((Math.random()*10)-1)
let num2 = Math.floor((Math.random()*10)-1)

let line1 = 1
let line2 = 3
let line3 = 5
let line4 = 7
let CanPlay = new Boolean(true)


function LineTest(line){
    if (line == 1) {
        if (line1 > 0) {
            return CanPlay = true
        }
        else{
            console.log('Sorry Line 1 is Empty, plase choose an other line');
           return CanPlay = false
        }
    }
    if (line == 2) {
        if (line2 > 0) {
            return CanPlay = true
        }
        else{
            console.log('Sorry Line 2 is Empty, plase choose an other line');
           return CanPlay = false
        }
    }
    if (line == 3) {
        if (line3 > 0) {
            return CanPlay = true
        }
        else{
            console.log('Sorry Line 3 is Empty, plase choose an other line');
           return CanPlay = false
        }
    }
    if (line == 4) {
        if (line4 > 0) {
            return CanPlay = true
        }
        else{
            console.log('Sorry Line 4 is Empty, plase choose an other line');
           return CanPlay = false
        }
    }
}

function MatchesDelete(line , matches){

    eval("line"+line + "-="+ matches)
    console.log(eval("line"+line));
}

console.log(`Please enter a Line :`);
rl.on('line',(UserLine)=>{
    if (UserLine.trim() < 5 && UserLine.trim() > 0) {
        LineTest(UserLine)
        if (CanPlay) {
            rl.question('Number of matches : ', (UserMatches)=>{
                if (UserMatches.trim() > 0 && UserMatches.trim() <= eval("line"+UserLine) ) {   
                    MatchesDelete(UserLine , UserMatches)
                }else{
                    rl.setPrompt(`Please choose a number between 1 and ${eval("line"+UserLine)}\n`)
                    rl.prompt()
                }
            })
        }
    }
    else {
        rl.setPrompt('Wrong \nPlease choose a number between 1 and 4 \n');
        rl.prompt();
        console.log(`Please enter a Line :`);

    }
})

rl.on('close',()=>{
    console.log('GAME OVER');
})