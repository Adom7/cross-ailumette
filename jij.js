const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

let AILine = Math.floor(Math.random()*4)
let AIMatches = eval("Math.floor(Math.random()*"+ AILine + "-1)")

console.log(AILine , AIMatches);