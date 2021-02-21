const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let line1 = 500


rl.question('Line :', (UserLine=>{
    console.log(eval("line"+UserLine)); 
}))