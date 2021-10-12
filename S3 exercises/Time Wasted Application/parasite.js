window.onload = function(){
    searchMovie();
}

function searchMovie(){

    fetch("http://www.omdbapi.com/?t=MADAGASCAR&apikey=2c9d6532")
.then(response => response.json())
.then(data=>{
    console.log(data);
    console.log(data.Title);
    showMovie(data)
})
}

function showMovie(data){
    let movie = 
    `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
        <div class="col-md-4">
            <img src="${data.Poster}" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${data.Title}</h5>
                <p class="card-text">${data.Plot}</p>
                <p class="card-text">${data.Director}</p>
                <p class="card-text"><small class="text-muted">${data.Year}</small></p>
                <p class="card-text"><small class="text-muted">${data.Runtime}</small></p>
            </div>
        </div>
    </div>
</div>
    `
    document.getElementById('movieCard').innerHTML = movie;

}

