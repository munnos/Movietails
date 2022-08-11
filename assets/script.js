
var api = "https://api.themoviedb.org/3/movie/550?api_key=e30f79ebc73e8b9c3028b23581e79f25";


fetch(api)
.then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      console.log(data);
      cocktailTest(data);
    });
  } else {
    alert('Error: ' + response.statusText);
  }
})
.catch(function (error) {
  alert('Unable to connect');
});
function cocktailTest(results){
  //console.log(results.drinks[0].strDrink)
  for(i=0; i < results.drinks.length; i++){
    console.log(results.drinks[i].strCategory);
  }
}