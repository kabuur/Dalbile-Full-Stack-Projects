let quation_Area = document.querySelector('#quation_Area');
let startBtn = document.querySelector('#Start')
let options = document.querySelector('#options');


const qs = [
   { 
        question: "what is the capital city of Somalia?",
        obtions:["Mogadishu","Nairobia","Cahira"],
        answer: "Mogadishu"
    },
    {
        question:"what is the capital city of Kenya?",
        obtions:["Kanbala","Nairobia","Toronto"],
        answer: "Nairobia"
    },
    {
        question:"what is the capital city of France?",
        obtions:["Doha","Paris","london"],
        answer: "Paris"
    },
]


let couter = 0
startBtn.addEventListener('click',()=>{
    create();
})



// check.addEventListener("onchange",(event)=>{
//     console.log(event.target.value)
// })
// function handaleChange(event){
//     alert("Change")
//     if(event.checked){
//         console.log(event.value)
//     }
// }




function create (){
    quation_Area.innerHTML = qs[couter].question
    let listOptions = ""

     qs[couter].obtions.forEach(element => {
        listOptions +=`${element} <input value= ${element}  class = "check" type="checkbox"/><br/>`
    });

  

    options.innerHTML = listOptions
   const startTime =  setTimeout(function(){
        create();
    },5000)

    couter++;
    check = document.querySelector('.check').addEventListener('onchange', (event)=>{
        console.log("event.target.value")
    })
    if(qs.length == couter){
        clearTimeout(startTime)
    }

}














