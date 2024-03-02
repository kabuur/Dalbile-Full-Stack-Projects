




async function fetchApi(){
    let main = document.querySelector("#main");
    let temp = ""
    try{
        const api = await fetch("https://jsonplaceholder.typicode.com/photos")
        const data = await api.json()
        console.log(data)
        data.forEach(element => {
            temp += `
                <div class="w-[200px] rounded-md bg-white">
                <img src="${element.thumbnailUrl}" alt="">
                <h1 class = "text-2xl font-light mx-4">${element.title}</h1>
                </div>
            `
        })
        main.innerHTML = temp;
    }catch(e){
        console.log(e)
    }
}

fetchApi()