import Team from './teams.js'
'use strict'

let list = [];
let pokemons = [];
fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(resp => resp.json())
    .then(data => {
            list = data.results;
            // LOOP OVER EVERY POKEMON
            list.forEach(poke => {
                fetch(poke.url)
                    .then(resp => resp.json())
                    .then(pokeObject => {
                        pokemons.push(pokeObject);

                    });
            });
            
            let array = Array(151);
            let htmlstring = "<article>";

            for (let i = 0; i < array.length; i++) {
             let tist = document.getElementById('container');   
            htmlstring += `
            <article">
            <div>    
            
            <h1>${data.results[i].name}</h1>
            <img src="${data.results[i].front_default}"">
            </div>
            </article>
            `
            htmlstring += "</article>";
            htmlstring.innerHTML = tist;
            }



    });

window.onload = function () {
    setTimeout(buildList, 3000);

    function buildList() {
        console.log(pokemons);
    }
}