let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let Titile = document.querySelector("h1")
Titile.innerHTML = "This is javascript";






const styling = (elemant) =>{
    elemant.style.backgroundColor ="red"
    elemant.style.color = "white"
    elemant.style.border = "none"
    elemant.style.padding = "5px 10px"
    elemant.style.fontSize = "2rem"
    elemant.style.fontFamily = "sans-serif"

}

const styling2 = (elemant) =>{
    elemant.style.backgroundColor ="black"
    elemant.style.color = "white"
    elemant.style.border = "none"
    elemant.style.padding = "5px 10px"
    elemant.style.fontSize = "2rem"
    elemant.style.fontFamily = "sans-serif"

}


btn1.addEventListener("click",  ()=>{

    styling2(btn)
    styling2(Titile)
    
    })



btn.addEventListener("click",  ()=>{

styling(btn)
styling(Titile)

})





