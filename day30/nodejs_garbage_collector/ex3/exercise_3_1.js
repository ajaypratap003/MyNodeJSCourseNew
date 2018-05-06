/*
Run with: node -trace_gc --trace_incremental_marking --max_semi_space_size=1 --max_old_space_size=20 exercise_3_1.js
reset when 10,000,000 bytes have been accumulated
*/


const a = { b: { c: [] } };

let i = 0;

function aString(s) {
    let text = '';
    for (let i = 0; i < 10000; i++) {

        //string of 100 characters
        text += 'Simply very dummy dummy dummy text of the printing. Very dummy dummy dummy dummy dummy dummy text. ';
    }
    s.push(text);
}

setInterval(function () {
    aString(a.b.c);
    //reset when 10,000,000 bytes have been pushed into the array
    if (i === 10) {
        i = 0;
        a.b.c = [];
    }
    i++;

}, 500);
