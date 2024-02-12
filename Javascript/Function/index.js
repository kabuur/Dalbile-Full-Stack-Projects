
Mult()

let num1 = parseInt(prompt("num1"))
let num2 = parseInt(prompt("num2"))
let num3 = parseInt(prompt("num3"))

let list = []

list.push(num1)
list.push(num2)
list.push(num3)


function Mult(){

    let max = 0
    for (let i = list.length; i >=0 ; i--){
        if(list[i] >= max){
            max = list[i]
        }
    
    }
    document.write(`the bigest num is ${max}`)
    console.log(num1)
    


    // document.write(`The multiplication of ${num1} x ${num2} x ${num3} = ${num1*num2*num3}`)
}


Mult()

