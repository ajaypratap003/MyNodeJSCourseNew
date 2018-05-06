/*
Run with: node -trace_gc --trace_incremental_marking --max_semi_space_size=1 --max_old_space_size=20 exercise_3_2.js
A contrived example to gradually exhaust memory
*/

const a = {b: {c: []}};
let i = 0;

function aString (s) {
let text = '';
for (let i = 0; i < 10000; i++) {
//string of 100 characters
text += 'Simply very dummy dummy dummy text of the printing. Very dummy dummy dummy dummy dummy dummy text. ';
}
s.push(text); //push in 1,000,000 bytes of data
}

//Push in 1,000,000 bytes of data till the system
//runs out of memory
setInterval(function () {
aString(a.b.c);
}, 500);








































