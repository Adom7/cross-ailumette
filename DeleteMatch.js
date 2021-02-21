//NOTE Line et Matches are inputs from the user and not the actual value of the number of matches still available ingame.

let matches1 = 1;
let matches2 = 3;
let matches3 = 5;
let matches4 = 7;

function DeleteMatch(line ,matches){
  switch(!isNaN(line) && !isNaN(matches)) {
    case false : console.log('Please enter a full number for Line and Matches');
    break;
    case true :
        switch (line){
          case '1' : 
            switch (matches) {
              case '1': console.log(`You took of ${matches} matches from line ${line}`); 
                //NOTE Still need to create the function to delete the matches proprely 
               break;
          
              default: console.log('Sorry you can only take out 1 match from this line');
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
              console.log(`Sorry, please choose a number between 1 and ${line*2-1}`);
            }
            else {
                console.log("good");
            }
          break;
          case '4' :
            if (matches > line*2-1 || matches < 0) {
              console.log(`Sorry, please choose a number between 1 and ${line*2-1}`);
            }
            else {
              matches4 -= matches
            }  
          break;
          default : console.log('Please choose a number between 1 and 4');
         }
    break;
  }
}

module.exports = {
  DeleteMatch
}
