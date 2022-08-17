
  //api1 list all cocktails by first letter ✔ ❌
  //api1 list all cocktails by name ✔
  //api3 search ingredient by name - tells you what it is ✔
  //api4 Lookup full cocktail details by id ✔
  //api5 Lookup ingredient by  ✔
  //api6 Lookup a random cocktail
  
  
  var cocktailRandomApi = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  
  
 function randomCocktail(qureyString){
  console.log("qureyString");
  fetch(qureyString)
   
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);   
          console.log(qureyString);       
          cocktailtwist(data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
      
    })
    .catch(function (error) {
      alert('Unable to connect');
    });
  }
    function APIQuery(queryString){
      var api = "https://www.thecocktaildb.com/api/json/v1/1/" + queryString
      console.log(api);

      fetch(api)
      .then(function (response) {
       if (response.ok) {
          response.json().then(function (data) {
          console.log(data);          
          cocktailDisplay(data);
          return(data);
        });
        } else {
        alert('Error: ' + response.statusText);
        }
      
      })
      .catch(function (error) {
      alert('Unable to connect');
      });

    }

    function cocktailDisplay(results){
      console.log(results.drinks.length)
      for(i=0; i < results.drinks.length; i++){
        console.log(results.drinks[i].strCategory);
      }

      //TO DO: currently renders to a bootstrap card- need to change for semantics UI card
      var cocktailImg = results.drinks[0].strDrinkThumb;
      var tailImg = $("<img>");
      tailImg.attr("class", "card-img");
      tailImg.attr("src", cocktailImg);
      $("#cocktail-image").append(tailImg);
      $("#name").text(results.drinks[0].strDrink)
      $("#receipe").text("Instructions: " + results.drinks[0].strInstructions);
      $("#glass").text("Recomended Glass: " + results.drinks[0].strGlass) 

      //create an ingrediants array
      var ingredientsArr =[];
      for (var i = 1; i <= 15; i++) {
        var ingredient = results.drinks[0]["strIngredient" + i];
        if(ingredient !== null){
          ingredientsArr.push(ingredient);
        }
      }

      //extract measures
      var measuresArr =[];
      for (var i = 1; i <= 15; i++) {
        var measure = results.drinks[0]["strMeasure" + i];
       if(measure !== null & measure !== ""){
        measuresArr.push(measure);
       }
      }

      var cocktailEntry = {
        "id": results.drinks[0].idDrink,
        "name": results.drinks[0].strDrink,
        "glass-type": results.drinks[0].strGlass,
        "instructions": results.drinks[0].strInstructions,
        "ingredients": ingredientsArr,
        "measures": measuresArr,
        "image": results.drinks[0].strDrinkThumb
      };

      localStorage.setItem("randomCocktail", JSON.stringify(cocktailEntry));
      
      console.log(cocktailEntry);
      for(var i= 0; i < ingredientsArr.length; i++){
            //console.log(ingredientsArr);
            //console.log(results.drinks[0]["strIngredient" + i]);
            //display ingedients
            var ingred1 = $("<li>").text(measuresArr[i] + ", " +ingredientsArr[i]);
            $("#display-ingredients").append(ingred1)


      }
      
    }

    function cocktailtwist(results) {
      var drinkid = results.drinks[0].idDrink;
      console.log(results);
      query = "lookup.php?i=" + drinkid;
      console.log(query);
      var results = APIQuery(query);
      console.log(results);

    }

   
/***************************Film Section*********************************************** */

 // api key stored in variable so can be used easier

var apiKey = "e30f79ebc73e8b9c3028b23581e79f25";
// var apiUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key="+apiKey+"&language=en-US";

var randomise = Math.floor(Math.random() * 100);

// random number for each call 
var randomise = Math.random() * 100;

// storing API calls for genres in variables
var random =
  "https://api.themoviedb.org/3/discover/movie?&page=" +
  randomise +
  "&api_key=" +
  apiKey +
  "&language=en-US";


function storeFilms(filmData) {
  var filmArray = [];
  //console.log("inside storefilms");
  console.log(filmData.length);


  //TO DO: Add code to render film data to the screen here

  //populate film entry object  
    var filmEntry = {
      "original_title": filmData[0].original_title,
      "title": filmData[0].title,
      "overview": filmData[0].overview,
      "poster": filmData[0].poster_path,
      "release_date": filmData[0].release_date,
      "popularity": filmData[0].popularity,
      "vote_ave": filmData[0].vote_average,
      "vote_count": filmData[0].vote_count
    };
    //Add film entry to array
    filmArray.push(filmEntry);
 
  console.log(filmArray);
  //storing cocktails to local storage
  localStorage.setItem("randomFilm", JSON.stringify(filmArray));

}

function callFilm() {
console.log("inside callFilm")
fetch(random).then(function (response) {
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
        
      }
      console.log(finishedfilmArray);
      storeFilms(finishedfilmArray)

    });
  }
})};

//Button event code to go here

randomCocktail(cocktailRandomApi);
callFilm();
