const qs = ["what is your name","what is your email","How old are you",]




let couter = 0
function create (){
    console.log(qs[couter])
   const startTime =  setTimeout(function(){
        create();
    },3000)

    couter++;

    if(qs.length == couter){
        clearTimeout(startTime)
    }
}

create();













// const timeout  = setTimeout(greeting,3000,"Ahmed");

// function greeting(x){
//     console.log("hello ", x)
// }