let question_Area = document.querySelector('#quation_Area');
let startBtn = document.querySelector('#Start');
let options = document.querySelector('#options');
let score = 0
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

let counter = 0;
let finalAnswer = "";

startBtn.addEventListener('click', () => {
  create();
});

function create() {
    
  DisplayingQuestions();
  const startTime = setTimeout(() => {
    create();
    console.log(finalAnswer)
    pointsCount()
  }, 5000);
  counter++;
  CheckCheckbox();

 

  if (counter == qs.length ) {

    clearTimeout(startTime);
    question_Area.innerHTML =""
    options.innerHTML = ""
    return
    

  }
}

function CheckCheckbox() {
  const check = document.querySelectorAll('.check');
  check.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      let answer = event.target.value;
      finalAnswer = answer;
    //   console.log(finalAnswer);
    });
  });
}

function DisplayingQuestions() {
  question_Area.innerHTML = qs[counter].question;
  let listOptions = "";

  qs[counter].obtions.forEach(element => {
    listOptions += `${element} <input value="${element}" class="check" name="${qs[counter].question}" type="radio"/><br/>`;
  });

  options.innerHTML = listOptions;
}

function pointsCount(){
    if(finalAnswer === qs[counter].answer){
        console.log("Correct Answer");
    }else{
        console.log("Wrong Answer");
    }
}