
var apiKey = "e30f79ebc73e8b9c3028b23581e79f25";
// var apiUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key="+apiKey+"&language=en-US";

var randomise = Math.floor(Math.random() * 100);


// console.log(mathRandom)




var actionapi = "https://api.themoviedb.org/3/discover/movie?with_genres=28&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var adventureapi = "https://api.themoviedb.org/3/discover/movie?with_genres=12&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var animationapi = "https://api.themoviedb.org/3/discover/movie?with_genres=16&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var comedyapi = "https://api.themoviedb.org/3/discover/movie?with_genres=3&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var crimeapi = "https://api.themoviedb.org/3/discover/movie?with_genres=80page="+randomise+"&api_key="+apiKey+"&language=en-US";
var documentaryapi = "https://api.themoviedb.org/3/discover/movie?with_genres=27page="+randomise+"&api_key="+apiKey+"&language=en-US";
var dramaapi = "https://api.themoviedb.org/3/discover/movie?with_genres=6&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var familyapi = "https://api.themoviedb.org/3/discover/movie?with_genres=10751&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var fantasyAPI = "https://api.themoviedb.org/3/discover/movie?with_genres=14&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var historyAPI = "https://api.themoviedb.org/3/discover/movie?with_genres=36&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var horrorAPI = "https://api.themoviedb.org/3/discover/movie?with_genres=27&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var musicAPI = "https://api.themoviedb.org/3/discover/movie?with_genres=10402&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var mysteryAPI = "https://api.themoviedb.org/3/discover/movie?with_genres=9648&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var romanceAPI = "https://api.themoviedb.org/3/discover/movie?with_genres=10749&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var sciencefictionAPI = "https://api.themoviedb.org/3/discover/movie?with_genres=878&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var thrillerAPI = "https://api.themoviedb.org/3/discover/movie?with_genres=53&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var warAPI = "https://api.themoviedb.org/3/discover/movie?with_genres=10752&page="+randomise+"&api_key="+apiKey+"&language=en-US";
var westernAPI = "https://api.themoviedb.org/3/discover/movie?with_genres=37&page="+randomise+"&api_key="+apiKey+"&language=en-US";



// var apiUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key="+apiKey+"&language=en-US";




fetch(actionapi)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);


          // var actionData = {
          //   title: data.
          // }
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect');
    });

    




    // var api2 = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";

    // console.log(api2);

//     var apiKey = "e30f79ebc73e8b9c3028b23581e79f25";
// var apiUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key="+apiKey+"&language=en-US":



