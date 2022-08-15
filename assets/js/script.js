//globals

/* the film categories have been linked to different categories of glass - different glasses are used depending on the type of cocktail - this association was used to choose 'appropriate' groupings  to link with film genres i.e whiskey => whiskey glass =>western*/ 
var glassType;

/**!!!!!!!change the film genre here for cocktail code !!!!!!!***/

let filmType = "comedy";  //used in the cocktail code
/***********************/


if(filmType === "adventure") {
    glassType = ["Highball glass", "white wine glass", "copper mug", "Hurricane glass"];
} else if(filmType === "animation") {
    glassType = ["parfait glass", "whiskey sour glass", "shot glass", "white wine glass"];
} else if(filmType === "comedy") {  
    glassType = ["beer pilsner", "beer mug", "highball glass", "shot glass", "irish coffee cup", "champagne flute"];
} else if(filmType === "action") {
  glassType = ["Highball glass", "white wine glass", "copper mug", "Hurricane glass", "shot glass", "beer Glass"];
} else if(filmType === "crime") {
  glassType = ["Whiskey Glass", "Whiskey sour glass", "Nick and Nora Glass", "Martini Glass"];
} else if(filmType === "documentary") {
  glassType = ["Pint glass","Wine Glass","Coffee mug"];
}  else if(filmType === "drama") {
  glassType = ["Old-fashioned glass","Hurricane glass","Beer pilsner","Pousse cafe glass"];
}  else if(filmType === "history") {
  glassType = ["Brandy snifter","Irish coffee cup","Champagne flute","Whiskey Glass","Margarita glass"];
} else if(filmType === "fantasy") {
  glassType = ["Cocktail glass","Pousse cafe glass","Beer Glass","Balloon Glass","Copper Mug"];
} else if(filmType === "horror") {
  glassType = ["Collins glass","Wine Glass","Mason jar","Pousse cafe glass","Whiskey Glass"];
} else if(filmType === "music") {
  glassType = ["Pitcher","Highball glass","Beer Glass","Shot glass"];
} else if(filmType === "mystery") {
  glassType = ["Pousse cafe glass","Nick and Nora Glass","Champagne flute", "Whiskey Glass", "Nick and Nora Glass", "shot glass"]; 
} else if(filmType === "romance") {
  glassType = ["Cocktail glass","White wine glass","Wine Glass","Parfait glass"];
} else if(filmType === "scienceFiction") {
  glassType = ["Pousse cafe glass","Shot glass","Pitcher","Beer mug","Pitcher","Copper Mug"];
} else if(filmType === "tvMovie") {
  glassType = ["Beer Glass","Highball glass","Wine Glass","Whiskey Glass","Old-fashioned glass"];
} else if(filmType === "thriller") {
  glassType = ["Shot glass","Pousse cafe glass","Margarita glass","Wine Glass"];
} else if(filmType === "war") {
  glassType = ["Whiskey Glass","Beer mug","Beer pilsner","Beer Glass","Old-fashioned glass"];
} else if(filmType === "western") {
  glassType = ["Old-fashioned glass","Whiskey Glass","Whiskey sour glass","Beer Glass","Martini Glass"];
} else if(filmType === "family") {
  glassType = "family"; 
} else {
  console.log("matching film genre not found ");
  
} 

//var family;  //qurey string changed in getCocktailId for non alcoholic option
//var random;*/
var cocktailObjects = [];
var cocktailDetails = []
var cocktailId = [];
var randomId = []
var store = []

//filmGenre comes from button click - could either save the value to local storage or use http string
//var filmGenre;



console.log(glassType);

//call cocktail API to request cocktail id's for the glass types associated with the film genre arrays
async function apiCocktailId(queryString) {
  //console.log(queryString);
  settings = {
     "url": "https://www.thecocktaildb.com/api/json/v1/1/" + queryString,
     "method": "GET",
 };

 data = await $.ajax(settings).done(function (response) {
  //console.log(response);
  return response;
     
 });
 
 return data;
}

/*set the api query string with the selected film genre, filter the data, extract the  cocktail id's add to a  global array*/
async function getCocktailId() {

    if(glassType === "family"){
      
          
        //var queryString = "filter.php?a=non alcoholic";
        queryString = "filter.php?a=Non Alcoholic";
          await apiCocktailId(queryString).then((data) => {
              //console.log(data)                  
              //console.log(data.drinks.length);
              cocktailObjects.push(data.drinks);
              console.log(cocktailObjects);
            
          });
        
      
    } else {
      for (let i = 0; i < glassType.length; i++) {
          
        var queryString = "filter.php?g=" + glassType[i];

          await apiCocktailId(queryString).then((data) => {
            console.log(data)
            
                  
              //console.log(data.drinks.length);
              cocktailObjects.push(data.drinks);
              //console.log(cocktailObjects);
            
          });        
      }
    }

 //console.log(cocktailObjects.length);
 for ( i= 0; i < cocktailObjects.length; i ++){
    for (var j = 0; j < cocktailObjects[i].length; j++){
      cocktailId.push(cocktailObjects[i][j].idDrink)
      //console.log(i+ ", "+ j);
    }
 }
 //console.log(cocktailId);
}

/* From the arry of cocktail id's randonly select 4 entries */ 
function getRandomId() {
  //console.log("inside getCocktDetails");
  //randomly select 4 cocktails from the cocktail ID array
  //var randomId = [];
  var numCocktails = 4;
  var num = Math.floor(Math.random() * cocktailId.length);
    
  for (var i = 0; i < numCocktails; i++){
      //get a random number between 0 and length of ID's array
      var num = Math.floor(Math.random() * cocktailId.length);
      //select the corresponding entry in the cockTailId array and store to new array
      randomId.push(cocktailId[num]);
      //remove entry from cocktailID array so it can't be selected again 
      cocktailId.splice(num, 1);
  }
  console.log(randomId);
}

//request data from cocktail db for cocktail details for the randonly selected cocktail Ids
async function apiCocktailDetails(queryString) {
  //console.log(queryString);
  settings = {
     "url": "https://www.thecocktaildb.com/api/json/v1/1/" + queryString,
     "method": "GET",
 };

 data = await $.ajax(settings).done(function (response) {
  //console.log(response);
  return response;
     
 });
 
 return data;
}

 /*Loop through the array of randomly selected cocktail IDs, for each entry request API data from cocktail db, extract required data and save to array of objects. Finally add the array of four cocktails objects to local storage.  The function needs to be aynchronous otherwise we end up with empty arrays for processing whilst the promise is pending*/
async function getCocktailDetails() { 

 for (let i = 0; i < randomId.length; i++) {
     
   var queryString = "lookup.php?i=" + randomId[i];

     await apiCocktailDetails(queryString).then((data) => {
      //console.log(data)     
             
       //extract ingredients
        var ingredientsArr =[];      
      for (var i = 1; i <= 15; i++) {
        var ingredient = data.drinks[0]["strIngredient" + i];
        if(ingredient !== null & ingredient !== ""){
          ingredientsArr.push(ingredient);
        }
      }

      //extract measures
      var measuresArr =[];
      for (var i = 1; i <= 15; i++) {
        var measure = data.drinks[0]["strMeasure" + i];
       if(measure !== null & measure !== ""){
        measuresArr.push(measure);
       }
      }
    
       
    //populate cocktail object
    var cocktailEntry = {
      "id": data.drinks[0].idDrink,
      "name": data.drinks[0].strDrink,
      "glass-type": data.drinks[0].strGlass,
      "instructions": ingredientsArr,
      "measures": measuresArr,
      "image": data.drinks[0].strDrinkThumb
    };

    //Add cocktail entry to global array
    store.push(cocktailEntry);
    
  });
  
    
  }
  //add cocktail array object to local storage
  var storedCocktailList = localStorage.getItem("cocktails"); 
    storedCocktailList = (storedCocktailList) ? JSON.parse(storedCocktailList) : [];
    
  
  storedCocktailList = store;
  //storing cocktails to local storage
  localStorage.setItem("cocktails", JSON.stringify( storedCocktailList));
  
  console.log(store);
}
    
async  function displayCocktailDetails() {
  await getCocktailId();
  getRandomId();  
  getCocktailDetails();   
}


/*******Film Code ******************************************/

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
  "https://api.themoviedb.org/3/discover/movie?with_genres=35&page=" +
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
var drama =
  "https://api.themoviedb.org/3/discover/movie?with_genres=18&page=" +
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
var mystery =
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

//use a variable to select the genre 
var filmGenre;
/***********change film genre here for film code *************************/
filmGenre = comedy;
/*************************************/
console.log(filmGenre);


function storeFilms(filmData) {
  var filmArray = [];
  console.log("inside storefilms")
  console.log(filmData.length);
  //populate film entry object

  for(var i = 0; i < filmData.length; i++) {
    var filmEntry = {
      "original_title": filmData[i].original_title,
      "title": filmData[i].title,
      "overview": filmData[i].overview,
      "poster": filmData[i].poster_path,
      "release_date": filmData[i].release_date,
      "popularity": filmData[i].popularity,
      "vote_ave": filmData[i].vote_average,
      "vote_count": filmData[i].vote_count
    };
    //Add film entry to array
    filmArray.push(filmEntry);
  }
  console.log(filmArray);
  //storing cocktails to local storage
  localStorage.setItem("films", JSON.stringify(filmArray));

}

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
      storeFilms(finishedfilmArray)

    });
  }
})};


//This is the main function call to start api requests, processing of data and the storing of cocktail information to local storage 

//TO DO: code for button event to go here and call functions below:
displayCocktailDetails();
callFilm();

