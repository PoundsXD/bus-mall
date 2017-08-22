'use strict';

var imgArray = [];
function NewImage(src) {
  this.src = src;
  this.clickCount = 0;
  this.timesDisplayed = 0;
  imgArray.push(this);
}
var bag = new NewImage('img/bag.jpg');
var banana = new NewImage('img/banana.jpg');
var bathroom = new NewImage('img/bathroom.jpg');
var boots = new NewImage('img/boots.jpg');
var breakfast = new NewImage('img/breakfast.jpg');
var bubblegum = new NewImage('img/bubblegum.jpg');
var chair = new NewImage('img/chair.jpg');
var cthulu = new NewImage('img/cthulhu.jpg');
var dogDuck = new NewImage('img/dogDuck.jpg');
var dragon = new NewImage('img/dragon.jpg');
var pen = new NewImage('img/pen.jpg');
var petSweep = new NewImage('img/petSweep.jpg');
var scissors = new NewImage('img/scissors.jpg');
var shark = new NewImage('img/shark.jpg');
var sweep = new NewImage('img/sweep.png');
var tauntaun = new NewImage('img/tauntaun.jpg');
var unicorn = new NewImage('img/unicorn.jpg');
var usb = new NewImage('img/usb.gif');
var waterCan = new NewImage('img/waterCan.jpg');
var wineGlass = new NewImage('img/wineGlass.jpg');

/*for loop for choosing pictures.*/
var totalClickCount = 0;
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
var exclusion = [];
var display = [];
var genFix = 0;
var divContentArray = ['divContent1', 'divContent2', 'divContent3'];
function genPictures() {
  display = [];
  document.getElementById('img1').innerHTML = '';
  for(var i = 0; i < 1; i++) {
    var num = Math.floor(Math.random() * (19 - 1) + 1);
    exclusion.push(num);
    display.push(num);
    imgArray[num].timesDisplayed++;
    for(var h = 0; h < 2; h++) {
      while(exclusion.includes(num)) {
        var num = Math.floor(Math.random() * (19 - 1) + 1);
      }
      exclusion.push(num);
      display.push(num);
      imgArray[num].timesDisplayed++;
    }
    for(var j = 0; j < 3; j++){
      var firstImg = document.getElementById('img1');
      var imgCreate = document.createElement('img');
      imgCreate.src = imgArray[display[j]].src;
      imgCreate.className += divContentArray[j];
      firstImg.appendChild(imgCreate);
      imgCreate.addEventListener('click', genPictures);
    }
    genFix++;
  } if(genFix > 1){
    genFix = 0;
    exclusion = [];
  }
  totalClickCount++;
};
genPictures();
