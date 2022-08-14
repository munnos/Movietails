// api key stored in variable so can be used easier

var apiKey = "e30f79ebc73e8b9c3028b23581e79f25";
// var apiUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key="+apiKey+"&language=en-US";

var randomise = Math.floor(Math.random() * 100);

// random number for each call 

var randomise = Math.random() * 100;
var randomise1 = Math.random() * 100;
var randomise2 = Math.random() * 100;
var randomise3 = Math.random() * 100;
var randomise4 = Math.random() * 100;
var randomise5 = Math.random() * 100;
var randomise6 = Math.random() * 100;
var randomise7 = Math.random() * 100;
var randomise8 = Math.random() * 100;
var randomise9 = Math.random() * 100;
var randomise10 = Math.random() * 100;
var randomise11 = Math.random() * 100;
var randomise12 = Math.random() * 100;
var randomise13 = Math.random() * 100;
var randomise14 = Math.random() * 100;
var randomise15 = Math.random() * 100;
var randomise16 = Math.random() * 100;
var randomise17 = Math.random() * 100;
var randomise18 = Math.random() * 100;



// storing API calls for genres in variables

var randomfilmApi =
  "https://api.themoviedb.org/3/discover/movie?&page=" +
  randomise +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var action =
  "https://api.themoviedb.org/3/discover/movie?with_genres=28&page=" +
  randomise1 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var adventure =
  "https://api.themoviedb.org/3/discover/movie?with_genres=12&page=" +
  randomise2 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var animation =
  "https://api.themoviedb.org/3/discover/movie?with_genres=16&page=" +
  randomise3 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var comedy =
  "https://api.themoviedb.org/3/discover/movie?with_genres=3&page=" +
  randomise4 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var crime =
  "https://api.themoviedb.org/3/discover/movie?with_genres=80page=" +
  randomise5 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var documentary =
  "https://api.themoviedb.org/3/discover/movie?with_genres=27page=" +
  randomise6 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var dramaapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=6&page=" +
  randomise7 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var family =
  "https://api.themoviedb.org/3/discover/movie?with_genres=10751&page=" +
  randomise8 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var fantasy =
  "https://api.themoviedb.org/3/discover/movie?with_genres=14&page=" +
  randomise9 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var history =
  "https://api.themoviedb.org/3/discover/movie?with_genres=36&page=" +
  randomise10 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var horror =
  "https://api.themoviedb.org/3/discover/movie?with_genres=27&page=" +
  randomise11 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var music =
  "https://api.themoviedb.org/3/discover/movie?with_genres=10402&page=" +
  randomise12 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var mysteryi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=9648&page=" +
  randomise13 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var romance =
  "https://api.themoviedb.org/3/discover/movie?with_genres=10749&page=" +
  randomise14 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var scienceFiction =
  "https://api.themoviedb.org/3/discover/movie?with_genres=878&page=" +
  randomise15 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var thriller =
  "https://api.themoviedb.org/3/discover/movie?with_genres=53&page=" +
  randomise16 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var war =
  "https://api.themoviedb.org/3/discover/movie?with_genres=10752&page=" +
  randomise17 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var western =
  "https://api.themoviedb.org/3/discover/movie?with_genres=37&page=" +
  randomise18 +
  "&api_key=" +
  apiKey +
  "&language=en-US";

// function storing 4 random films for varying genres

//use a variable to select the genre - change it to select the different genres
var filmGenre;
filmGenre = family;

function callFilm() {

fetch(filmGenre).then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      console.log(data);
      var filmArray = data.results;
      var shuffflefilmArray = (array) => {
        for (var i = filmArray.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        shuffflefilmArray();
      };
      console.log(filmArray);

      for (var i = 0; i < filmArray.length; i++) {
        var finishedfilmArray = [];
        finishedfilmArray.push(filmArray[0]);
        finishedfilmArray.push(filmArray[1]);
        finishedfilmArray.push(filmArray[2]);
        finishedfilmArray.push(filmArray[3]);
      }
      console.log(finishedfilmArray);


    });
  }
})};

callFilm();
