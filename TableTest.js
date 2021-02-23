
let line1 = 1
let line2 = 2
let line3 = 5
let line4 = 7
let match = "|"
let empty = " "
let boardColor = "\x1b[31m"
let display2 = null
let display1 = [empty,empty,empty,match,empty,empty,empty].join('') 
let display3 = [empty,match,match,match,match,match,empty].join('')
let display4 = [match,match,match,match,match,match,match].join('')


if (line2 % 2) {
    display2 = [empty.repeat((7 - line2)/2),match.repeat(line2),empty.repeat((7 - line2)/2)].join('')
    
}else{
    display2 = [empty.repeat((7 - line2)/2),match.repeat(line2),empty.repeat((7 - line2)/2),empty].join('')


}

//NOTE update the board
board = `\n
*********
*${display1}*
*${display2}*
*${display3}*
*${display4}*
*********\n`
 console.log(boardColor , board);

