// api url
const api_url = "https://pokeapi.co/api/v2/pokemon?limit=151";

async function getapi(url){
     
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}

// Calling that async function
getapi(api_url);