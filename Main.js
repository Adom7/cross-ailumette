const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let line1 = 1
let line2 = 3
let line3 = 5
let line4 = 7

function UserValue(){
    let UserLine = null
    let UserMatches = null
    // console.log('Your Turn !');
    // console.log('Line : ' );
    rl.on('line', (UserLine) => {
        // console.log("Matches : ");
        rl.on('line', (UserMatches) => {
            // console.log(`Line: ${UserLine}`);
            // console.log(`Number of Matches: ${UserMatches}`);
            tour(UserLine , UserMatches)
            //NOTE on appl un function pour del.
            rl.pause()
          });
         
      });
}



UserValue()
function tour(line , matches){
    switch(!isNaN(line) && !isNaN(matches)) {
        case false : console.log("\x1b[31m",'Please enter a full number for Line and Matches');
        break;
        case true :
            switch (line){
              case '1' : 
                switch (matches) {
                  case '1': console.log(`You took of ${matches} matches from line ${line}`); 
                            line1 -= matches;
                            console.log(line1);
                            console.log(line2);
                            console.log(line3);
                            console.log(line4);
                            UserValue()
                    //NOTE Still need to create the function to delete the matches proprely 
                   break;
              
                  default: console.log("\x1b[31m",'Sorry you can only take out 1 match from this line');
                    break;
                }
              break;
    
              case '2' : 
                if (matches > line*2-1 || matches < 0) {
                  console.log("\x1b[31m","Sorry, please choose a number between 1 and 3");
                  
                }
                 else {
                  console.log("good");
                }
              break;
    
              case '3' :
                if (matches > line*2-1 || matches < 0) {
                  console.log("\x1b[31m",`Sorry, please choose a number between 1 and ${line*2-1}`);
                }
                else {
                    console.log("good");
                }
              break;
              case '4' :
                if (matches > line*2-1 || matches < 0) {
                  console.log("\x1b[31m",`Sorry, please choose a number between 1 and ${line*2-1}`);
                }
                else {
                  matches4 -= matches
                }  
              break;
              default : console.log("\x1b[31m",'Please choose a number between 1 and 4');
             }
        break;
      }
    }


