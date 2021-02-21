
let line1 = [' ', ' ', " ", "|", " ", " ", " "]
let line2 = [' ', ' ', "|", "|", "|", " ", " "]
let line3 = [' ', '|', "|", "|", "|", "|", " "]
let line4 = ['|', '|', "|", "|", "|", "|", "|"]
let MatchesLine3 = line3.length




let boardColor = "\x1b[31m"
let display1 = line1.join("")
let display2 = line2.join("")
let display3 = line3.join("")
let display4 = line4.join("")


//NOTE update the board
board = `\n
*********
*${display1}*
*${display2}*
*${display3}*
*${display4}*
*********\n`
 console.log(boardColor , board);
 console.log(line3);

