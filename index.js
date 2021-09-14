// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    console.log("Name:", name);
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const copyCatsAppend = [...cats, name]
    return copyCatsAppend;
}

function prependCat(name){
    const copyCatsPrepend = [name, ...cats]
    return copyCatsPrepend;
}

function removeLastCat() {
    const lastCatRemove = [...cats.slice(0, -1)]
    return lastCatRemove;
}

function removeFirstCat() {
    const firstCatRemove = [...cats.slice(1)]
    return firstCatRemove;
}

