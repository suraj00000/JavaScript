console.log("hello");

// on the fly gererate
function* numberGen(){
    let i=0;

    while(true){
        yield i++;
        // yield (i++).toString();
    }
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
}

const gen = numberGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);