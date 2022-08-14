
// api key stored in variable so can be used easier

var apiKey = "e30f79ebc73e8b9c3028b23581e79f25";


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
var actionapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=28&page=" +
  randomise1 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var adventureapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=12&page=" +
  randomise2 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var animationapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=16&page=" +
  randomise3 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var comedyapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=3&page=" +
  randomise4 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var crimeapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=80page=" +
  randomise5 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var documentaryapi =
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
var familyapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=10751&page=" +
  randomise8 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var fantasyapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=14&page=" +
  randomise9 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var historyapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=36&page=" +
  randomise10 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var horrorapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=27&page=" +
  randomise11 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var musicapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=10402&page=" +
  randomise12 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var mysteryapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=9648&page=" +
  randomise13 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var romanceapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=10749&page=" +
  randomise14 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var sciencefictionapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=878&page=" +
  randomise15 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var thrillerapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=53&page=" +
  randomise16 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var warapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=10752&page=" +
  randomise17 +
  "&api_key=" +
  apiKey +
  "&language=en-US";
var westernapi =
  "https://api.themoviedb.org/3/discover/movie?with_genres=37&page=" +
  randomise18 +
  "&api_key=" +
  apiKey +
  "&language=en-US";

// function storing 4 random films for varying genres

function randomFilm() {

fetch(randomfilmApi).then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      console.log(data);
      var randomfilmArray = data.results;
      var shuffflerandomfilmArray = (array) => {
        for (var i = randomfilmArray.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        shuffflerandomfilmArray();
      };
      console.log(randomfilmArray);

      for (var i = 0; i < randomfilmArray.length; i++) {
        var finishedrandomfilmArray = [];
        finishedrandomfilmArray.push(randomfilmArray[0]);
        finishedrandomfilmArray.push(randomfilmArray[1]);
        finishedrandomfilmArray.push(randomfilmArray[2]);
        finishedrandomfilmArray.push(randomfilmArray[3]);
      }
      console.log(finishedrandomfilmArray);

      
    });
  }
})};

randomFilm();

// function storing 4 films for action array

function randomactionfilmArray () {

fetch(actionapi).then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      console.log(data);
      var actionfilmArray = data.results;
      var shufffleactionfilmArray = (array) => {
        for (var i = actionfilmArray.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        shufffleactionfilmArray();
      };
      console.log(actionfilmArray);

      for (var i = 0; i < actionfilmArray.length; i++) {
        var finishedactionfilmArray = [];
        finishedactionfilmArray.push(actionfilmArray[0]);
        finishedactionfilmArray.push(actionfilmArray[1]);
        finishedactionfilmArray.push(actionfilmArray[2]);
        finishedactionfilmArray.push(actionfilmArray[3]);

        
      }
      console.log(finishedactionfilmArray);
    });
  }
})};

randomactionfilmArray();

// function storing 4 films for adventure 

function randomadventurefilmArray () {

fetch(adventureapi).then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      console.log(data);
      var adventurefilmArray = data.results;
      var shufffleadventurefilmArray = (array) => {
        for (var i = adventurefilmArray.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        shufffleadventurefilmArray();
       
      };
      console.log(adventurefilmArray);

      for (var i = 0; i < adventurefilmArray.length; i++) {
        var finishedadventurefilmArray = [];
        finishedadventurefilmArray.push(adventurefilmArray[0]);
        finishedadventurefilmArray.push(adventurefilmArray[1]);
        finishedadventurefilmArray.push(adventurefilmArray[2]);
        finishedadventurefilmArray.push(adventurefilmArray[3]);

       
      }
      console.log(finishedadventurefilmArray);
    });
  }
})};

randomadventurefilmArray();

// Animation

function randomanimationfilmArray () {

fetch(animationapi).then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      console.log(data);
      var animationfilmArray = data.results;
      var shufffleanimationfilmArray = (array) => {
        for (var i = animationfilmArray.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        shufffleanimationfilmArray();
      
      };
      console.log(animationfilmArray);

      for (var i = 0; i < animationfilmArray.length; i++) {
        var finishedanimationfilmArray = [];
        finishedanimationfilmArray.push(animationfilmArray[0]);
        finishedanimationfilmArray.push(animationfilmArray[1]);
        finishedanimationfilmArray.push(animationfilmArray[2]);
        finishedanimationfilmArray.push(animationfilmArray[3]);
      }
      console.log(finishedanimationfilmArray);
    });
  }
})};

randomanimationfilmArray();

// comedy array

function randomcomedyfilmArray () {

fetch(comedyapi).then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      console.log(data);
      var comedyfilmArray = data.results;
      var shuffflecomedyfilmArray = (array) => {
        for (var i = comedyfilmArray.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        shuffflecomedyfilmArray();
        
      };
      console.log(comedyfilmArray);

      for (var i = 0; i < comedyfilmArray.length; i++) {
        var finishedcomedyfilmArray = [];
        finishedcomedyfilmArray.push(comedyfilmArray[0]);
        finishedcomedyfilmArray.push(comedyfilmArray[1]);
        finishedcomedyfilmArray.push(comedyfilmArray[2]);
        finishedcomedyfilmArray.push(comedyfilmArray[3]);

        
       
      }
      console.log(finishedcomedyfilmArray);
    });
  }
})};


// crime array

function randomcrimefilmArray () {

fetch(actionapi).then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      console.log(data);
      var crimefilmArray = data.results;
      var shuffflecrimefilmArray = (array) => {
        for (var i = crimefilmArray.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        shuffflecrimefilmArray();
        
      };
      console.log(crimefilmArray);

      for (var i = 0; i < crimefilmArray.length; i++) {
        var finishedcrimefilmArray = [];
        finishedcrimefilmArray.push(crimefilmArray[0]);
        finishedcrimefilmArray.push(crimefilmArray[1]);
        finishedcrimefilmArray.push(crimefilmArray[2]);
        finishedcrimefilmArray.push(crimefilmArray[3]);

       
      }
      console.log(finishedcrimefilmArray);
    });
  }
})};

randomcrimefilmArray();

// documentaries


function randomdocumentaryfilmArray () {

fetch(actionapi).then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      console.log(data);
      var documentaryfilmArray = data.results;
      var shufffledocumentaryfilmArray = (array) => {
        for (var i = documentaryfilmArray.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        shufffledocumentaryfilmArray();
      
      };
      console.log(documentaryfilmArray);

      for (var i = 0; i < documentaryfilmArray.length; i++) {
        var finisheddocumentaryfilmArray = [];
        finisheddocumentaryfilmArray.push(documentaryfilmArray[0]);
        finisheddocumentaryfilmArray.push(documentaryfilmArray[1]);
        finisheddocumentaryfilmArray.push(documentaryfilmArray[2]);
        finisheddocumentaryfilmArray.push(documentaryfilmArray[3]);

        
       
      }
      console.log(finisheddocumentaryfilmArray);
    });
  }
})};

randomdocumentaryfilmArray();

// drama film array

function randomdramafilmArray () {

  fetch(dramaapi).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        var dramafilmArray = data.results;
        var shufffledramafilmArray = (array) => {
          for (var i = dramafilmArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
          shufffledramafilmArray();
          
        };
        console.log(dramafilmArray);
  
        for (var i = 0; i < dramafilmArray.length; i++) {
          var finisheddramafilmArray = [];
          finisheddramafilmArray.push(dramafilmArray[0]);
          finisheddramafilmArray.push(dramafilmArray[1]);
          finisheddramafilmArray.push(dramafilmArray[2]);
          finisheddramafilmArray.push(dramafilmArray[3]);
        }
        console.log(finisheddramafilmArray);
      });
    }
  })};

  randomdramafilmArray();

  // family film array

  function randomfamilyfilmArray () {

    fetch(familyapi).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          var familyfilmArray = data.results;
          var shuffflefamilyfilmArray = (array) => {
            for (var i = familyfilmArray.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
            shuffflefamilyfilmArray();
          };
          console.log(familyfilmArray);
    
          for (var i = 0; i < familyfilmArray.length; i++) {
            var finishedfamilyfilmArray = [];
            finishedfamilyfilmArray.push(familyfilmArray[0]);
            finishedfamilyfilmArray.push(familyfilmArray[1]);
            finishedfamilyfilmArray.push(familyfilmArray[2]);
            finishedfamilyfilmArray.push(familyfilmArray[3]);
    
            
          }
          console.log(finishedfamilyfilmArray);
        });
      }
    })};

    randomfamilyfilmArray();

    // fantasy film array

    function randomfantasyfilmArray () {

    fetch(fantasyapi).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          var fantasyfilmArray = data.results;
          var shuffflefantasyfilmArray = (array) => {
            for (var i = fantasyfilmArray.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
            shuffflefantasyfilmArray();
          };
          console.log(fantasyfilmArray);
    
          for (var i = 0; i < fantasyfilmArray.length; i++) {
            var finishedfantasyfilmArray = [];
            finishedfantasyfilmArray.push(fantasyfilmArray[0]);
            finishedfantasyfilmArray.push(fantasyfilmArray[1]);
            finishedfantasyfilmArray.push(fantasyfilmArray[2]);
            finishedfantasyfilmArray.push(fantasyfilmArray[3]);
    
            
          }
          console.log(finishedfantasyfilmArray);
        });
      }
    })};

    randomfantasyfilmArray();

    // history film array

    function randomhistoryfilmArray () {

      fetch(historyapi).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            var historyfilmArray = data.results;
            var shuffflehistoryfilmArray = (array) => {
              for (var i = historyfilmArray.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
              }
              shuffflehistoryfilmArray();
            };
            console.log(historyfilmArray);
      
            for (var i = 0; i < historyfilmArray.length; i++) {
              var finishedhistoryfilmArray = [];
              finishedhistoryfilmArray.push(historyfilmArray[0]);
              finishedhistoryfilmArray.push(historyfilmArray[1]);
              finishedhistoryfilmArray.push(historyfilmArray[2]);
              finishedhistoryfilmArray.push(historyfilmArray[3]);
      
              
            }
            console.log(finishedhistoryfilmArray);
          });
        }
      })};

      // horror

      function randomhorrorfilmArray () {

        fetch(horrorapi).then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              console.log(data);
              var horrorfilmArray = data.results;
              var shuffflehorrorfilmArray = (array) => {
                for (var i = horrorfilmArray.length - 1; i > 0; i--) {
                  var j = Math.floor(Math.random() * (i + 1));
                  var temp = array[i];
                  array[i] = array[j];
                  array[j] = temp;
                }
                shuffflehorrorfilmArray();
              };
              console.log(horrorfilmArray);
        
              for (var i = 0; i < horrorfilmArray.length; i++) {
                var finishedhorrorfilmArray = [];
                finishedhorrorfilmArray.push(horrorfilmArray[0]);
                finishedhorrorfilmArray.push(horrorfilmArray[1]);
                finishedhorrorfilmArray.push(horrorfilmArray[2]);
                finishedhorrorfilmArray.push(horrorfilmArray[3]);
        
                
              }
              console.log(finishedhorrorfilmArray);
            });
          }
        })};

        randomhorrorfilmArray();

        function randommusicfilmArray () {

          fetch(musicapi).then(function (response) {
            if (response.ok) {
              response.json().then(function (data) {
                console.log(data);
                var musicfilmArray = data.results;
                var shuffflemusicfilmArray = (array) => {
                  for (var i = musicfilmArray.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                  }
                  shuffflemusicfilmArray();
                };
                console.log(musicfilmArray);
          
                for (var i = 0; i < musicfilmArray.length; i++) {
                  var finishedmusicfilmArray = [];
                  finishedmusicfilmArray.push(musicfilmArray[0]);
                  finishedmusicfilmArray.push(musicfilmArray[1]);
                  finishedmusicfilmArray.push(musicfilmArray[2]);
                  finishedmusicfilmArray.push(musicfilmArray[3]);
          
                  
                }
                console.log(finishedmusicfilmArray);
              });
            }
          })};

          // mystery film array

          function randommysteryfilmArray () {

            fetch(mysteryapi).then(function (response) {
              if (response.ok) {
                response.json().then(function (data) {
                  console.log(data);
                  var mysteryfilmArray = data.results;
                  var shuffflemysteryfilmArray = (array) => {
                    for (var i = mysteryfilmArray.length - 1; i > 0; i--) {
                      var j = Math.floor(Math.random() * (i + 1));
                      var temp = array[i];
                      array[i] = array[j];
                      array[j] = temp;
                    }
                    shuffflemysteryfilmArray();
                  };
                  console.log(mysteryfilmArray);
            
                  for (var i = 0; i < mysteryfilmArray.length; i++) {
                    var finishedmysteryfilmArray = [];
                    finishedmysteryfilmArray.push(mysteryfilmArray[0]);
                    finishedmysteryfilmArray.push(mysteryfilmArray[1]);
                    finishedmysteryfilmArray.push(mysteryfilmArray[2]);
                    finishedmysteryfilmArray.push(mysteryfilmArray[3]);
            
                    
                  }
                  console.log(finishedmysteryfilmArray);
                });
              }
            })};

            randommysteryfilmArray();

            // romance film array

            function randomromancefilmArray () {

              fetch(romanceapi).then(function (response) {
                if (response.ok) {
                  response.json().then(function (data) {
                    console.log(data);
                    var romancefilmArray = data.results;
                    var shufffleromancefilmArray = (array) => {
                      for (var i = romancefilmArray.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                      }
                      shufffleromancefilmArray();
                    };
                    console.log(romancefilmArray);
              
                    for (var i = 0; i < romancefilmArray.length; i++) {
                      var finishedromancefilmArray = [];
                      finishedromancefilmArray.push(romancefilmArray[0]);
                      finishedromancefilmArray.push(romancefilmArray[1]);
                      finishedromancefilmArray.push(romancefilmArray[2]);
                      finishedromancefilmArray.push(romancefilmArray[3]);
              
                      
                    }
                    console.log(finishedromancefilmArray);
                  });
                }
              })};
  
              randomromancefilmArray();

              //  Science fiction random array

              function randomsciencefictionfilmArray () {

                fetch(sciencefictionapi).then(function (response) {
                  if (response.ok) {
                    response.json().then(function (data) {
                      console.log(data);
                      var sciencefictionfilmArray = data.results;
                      var shuffflesciencefictionfilmArray = (array) => {
                        for (var i = sciencefictionfilmArray.length - 1; i > 0; i--) {
                          var j = Math.floor(Math.random() * (i + 1));
                          var temp = array[i];
                          array[i] = array[j];
                          array[j] = temp;
                        }
                        shuffflesciencefictionfilmArray();
                      };
                      console.log(sciencefictionfilmArray);
                
                      for (var i = 0; i < sciencefictionfilmArray.length; i++) {
                        var finishedsciencefictionfilmArray = [];
                        finishedsciencefictionfilmArray.push(sciencefictionfilmArray[0]);
                        finishedsciencefictionfilmArray.push(sciencefictionfilmArray[1]);
                        finishedsciencefictionfilmArray.push(sciencefictionfilmArray[2]);
                        finishedsciencefictionfilmArray.push(sciencefictionfilmArray[3]);
                
                        
                      }
                      console.log(finishedsciencefictionfilmArray);
                    });
                  }
                })};
    
                randomsciencefictionfilmArray();

                  //  Thriller random array

              function randomthrillerfilmArray () {

                fetch(thrillerapi).then(function (response) {
                  if (response.ok) {
                    response.json().then(function (data) {
                      console.log(data);
                      var thrillerfilmArray = data.results;
                      var shuffflethrillerfilmArray = (array) => {
                        for (var i = thrillerfilmArray.length - 1; i > 0; i--) {
                          var j = Math.floor(Math.random() * (i + 1));
                          var temp = array[i];
                          array[i] = array[j];
                          array[j] = temp;
                        }
                        shuffflethrillerfilmArray();
                      };
                      console.log(thrillerfilmArray);
                
                      for (var i = 0; i < thrillerfilmArray.length; i++) {
                        var finishedthrillerfilmArray = [];
                        finishedthrillerfilmArray.push(thrillerfilmArray[0]);
                        finishedthrillerfilmArray.push(thrillerfilmArray[1]);
                        finishedthrillerfilmArray.push(thrillerfilmArray[2]);
                        finishedthrillernfilmArray.push(thrillerfilmArray[3]);
                
                        
                      }
                      console.log(finishedthrillerfilmArray);
                    });
                  }
                })};
    
                randomthrillerfilmArray();

                // War film array

                function randomwarfilmArray () {

                  fetch(warapi).then(function (response) {
                    if (response.ok) {
                      response.json().then(function (data) {
                        console.log(data);
                        var warfilmArray = data.results;
                        var shuffflewarfilmArray = (array) => {
                          for (var i = thrillerfilmArray.length - 1; i > 0; i--) {
                            var j = Math.floor(Math.random() * (i + 1));
                            var temp = array[i];
                            array[i] = array[j];
                            array[j] = temp;
                          }
                          shuffflewarfilmArray();
                        };
                        console.log(warfilmArray);
                  
                        for (var i = 0; i < warfilmArray.length; i++) {
                          var finishedwarfilmArray = [];
                          finishedwarfilmArray.push(warfilmArray[0]);
                          finishedwarfilmArray.push(warfilmArray[1]);
                          finishedwarfilmArray.push(warfilmArray[2]);
                          finishedwarfilmArray.push(warfilmArray[3]);
                  
                          
                        }
                        console.log(finishedwarfilmArray);
                      });
                    }
                  })};
      
                  randomwarfilmArray();

                  // Western film array

      
                    function randomwwesternfilmArray () {

                      fetch(westernapi).then(function (response) {
                        if (response.ok) {
                          response.json().then(function (data) {
                            console.log(data);
                            var westernfilmArray = data.results;
                            var shuffflewesternfilmArray = (array) => {
                              for (var i = westernfilmArray.length - 1; i > 0; i--) {
                                var j = Math.floor(Math.random() * (i + 1));
                                var temp = array[i];
                                array[i] = array[j];
                                array[j] = temp;
                              }
                              shuffflewesternfilmArray();
                            };
                            console.log(westernfilmArray);
                      
                            for (var i = 0; i < westernfilmArray.length; i++) {
                              var finishedwesternfilmArray = [];
                              finishedwesternfilmArray.push(westernfilmArray[0]);
                              finishedwesternfilmArray.push(westernfilmArray[1]);
                              finishedwesternfilmArray.push(westernfilmArray[2]);
                              finishedwesternfilmArray.push(westernfilmArray[3]);
                      
                              
                            }
                            console.log(finishedwesternfilmArray);
                          });
                        }
                      })};

                      randomwwesternfilmArray();


