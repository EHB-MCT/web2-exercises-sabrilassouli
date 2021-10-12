
fetch("http://www.omdbapi.com/?i=tt6751668&apikey=2c9d6532")
.then(response => response.json())
.then(data=>console.log(data))

