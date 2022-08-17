var localRooster = JSON.parse(window.localStorage.getItem("cocktails"));
var localFilm = JSON.parse(window.localStorage.getItem("films"));
var movieURL = "https://image.tmdb.org/t/p/w500";
console.log(localRooster);
console.log(localFilm);


function populateDiscription(locationF, disc) {
  const dis = document.querySelector(disc);
  dis.innerText = locationF.overview; 
}

function firstMCard() {
  document.querySelector('#overview1').onclick = function () {
    populateDiscription(localFilm[0], '#discription1');
  };
  document.querySelector("#poster1").src = movieURL+localFilm[0].poster;
  document.querySelector("#title1").innerText = localFilm[0].title;
}
function secondMCard() {
  document.querySelector('#overview2').onclick = function () {
    populateDiscription(localFilm[1], '#discription2');
  };
  document.querySelector("#poster2").src = movieURL+localFilm[1].poster;
  document.querySelector("#title2").innerText = localFilm[1].title;
}
function thirdMCard() {
  document.querySelector('#overview3').onclick = function () {
    populateDiscription(localFilm[2], '#discription3');
  };
  document.querySelector("#poster3").src = movieURL+localFilm[2].poster;
  document.querySelector("#title3").innerText = localFilm[2].title;
}
function forthMCard() {
  document.querySelector('#overview4').onclick = function () {
    populateDiscription(localFilm[3], '#discription4');
  };
  document.querySelector("#poster4").src = movieURL+localFilm[3].poster;
  document.querySelector("#title4").innerText = localFilm[3].title;
}



function generateInstructionList(location, cardList, glass) {
  const glassType1 = document.querySelector(glass);
  glassType1.innerText = "Glass type: " + location["glass-type"];
  var clear = document.querySelector(cardList);
  clear.innerText = "";

  for (let i = 0; i < location.ingredients.length; i++) {
    const list1 = document.querySelector(cardList);
    var iList = document.createElement("li");
    iList.innerText =
      location.ingredients[i] + "-(" + location.measures[i] + ")";
    list1.append(iList);
  }
}
function firstCard() {
  document.querySelector("#instructions1").onclick = function () {
    generateInstructionList(localRooster[0], "#list1", "#glassType1");
    document.querySelector('#inst1').innerText = localRooster[0].instructions;
  };
  document.querySelector("#image1").src = localRooster[0].image;
  document.querySelector("#name1").innerText = localRooster[0].name;
  
}
function secondCard() {
  document.querySelector("#instructions2").onclick = function () {
    generateInstructionList(localRooster[1], "#list2", "#glassType2");
    document.querySelector('#inst2').innerText = localRooster[1].instructions;
  };
  document.querySelector("#image2").src = localRooster[1].image;
  document.querySelector("#name2").innerText = localRooster[1].name;
}
function thirdCard() {
  document.querySelector("#instructions3").onclick = function () {
    generateInstructionList(localRooster[2], "#list3", "#glassType3");
    document.querySelector('#inst3').innerText = localRooster[2].instructions;
  };
  document.querySelector("#image3").src = localRooster[2].image;
  document.querySelector("#name3").innerText = localRooster[2].name;
}
function forthCard() {
  document.querySelector("#instructions4").onclick = function () {
    generateInstructionList(localRooster[3], "#list4", "#glassType4");
    document.querySelector('#inst4').innerText = localRooster[3].instructions;
  };
  document.querySelector("#image4").src = localRooster[3].image;
  document.querySelector("#name4").innerText = localRooster[3].name;
}
firstCard();
secondCard();
thirdCard();
forthCard();

firstMCard();
secondMCard();
thirdMCard();
forthMCard();
