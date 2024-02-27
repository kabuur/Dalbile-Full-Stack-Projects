const btn_start = document.querySelector("#start")
const btn_stop = document.querySelector("#stop")
const area = document.querySelector("#area")


btn_start.addEventListener("click",()=>{
    startCount()
  
})

let couter = 0
let interval

function startCount(){
     interval = setInterval(() =>{
        couter ++

        area.innerHTML = couter
    },2000)
}

btn_stop.addEventListener("click",()=>{
    stopCount()
})

function stopCount(){
    clearInterval(interval)
}





