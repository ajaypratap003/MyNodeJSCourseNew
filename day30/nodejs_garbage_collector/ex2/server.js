function aString() {
    let text = '';
    for(let i =0; i< 1000; i++) {
        text += 'This is a very very dummy text to print for showing some GC problematic stuff.'
    }
}

setInterval(aString, 200);
