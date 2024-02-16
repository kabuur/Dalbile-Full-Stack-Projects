function add(x,y){
    return x+y
}
function divide(x,y){
    return x/y
}


function calculate(x,y, opration){
    return opration (x,y)
}

console.log(calculate(4,6,add))
console.log(calculate(4,6,divide))



let test = "ahmed"

console.log(!test.includes("d"))