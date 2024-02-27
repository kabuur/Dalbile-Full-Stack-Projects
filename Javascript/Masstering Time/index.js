
console.log("the frist time")

const time = setTimeout(()=>{
    console.log('the middle time')
},2000)


console.log("the last  time")
const out = setTimeout(()=>{
    console.log('the middle time')
},2000)

clearTimeout(out)

console.log("the behand of out")