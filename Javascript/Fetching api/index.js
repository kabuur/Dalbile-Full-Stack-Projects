


async function fetchApi(){
    let main = document.querySelector('#main');
    let temp = ""
    try{
       
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        console.log(data);
        data.forEach(element => {
            temp += `
            <div class="w-[200px] rounded-md bg-white">
                <img class='w-full rounded-md'  src= ${element.thumbnailUrl}/>
                <h1 class = "text-2xl font-light mx-4" >${element.title}</h1>
            
            </div>
            `
            
        });

        main.innerHTML = temp;
      
    }catch(err){
        console.log(err);
    }
   

}

fetchApi()
