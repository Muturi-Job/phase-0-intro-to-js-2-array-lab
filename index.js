// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    return [ ...cats,"Broom"]
}
function removeLastCat(){
    return cats.slice(0,2)
}
function prependCat(){
    return ["Arnold",...cats]
}
function removeFirstCat(){
    return cats.slice(1,3)
}
