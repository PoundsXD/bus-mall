'use strict';

var imgArray = [];
function NewImage(src, clickCount) {
  this.src = src;
  this.clickCount = clickCount;
  imgArray.push(this);
}
var bag = new NewImage('img/bag.jpg', 0);
var banana = new NewImage('img/banana.jpg', 0);
var bathroom = new NewImage('img/bathroom.jpg', 0);
var boots = new NewImage('img/boots.jpg', 0);
var breakfast = new NewImage('img/breakfast.jpg', 0);
var bubblegum = new NewImage('img/bubblegum.jpg', 0);
var chair = new NewImage('img/chair.jpg', 0);
var cthulu = new NewImage('img/cthulhu.jpg', 0);
var dogDuck = new NewImage('img/dogDuck.jpg', 0);
var dragon = new NewImage('img/dragon.jpg', 0);
var pen = new NewImage('img/pen.jpg', 0);
var petSweep = new NewImage('img/petSweep.jpg', 0);
var scissors = new NewImage('img/scissors.jpg', 0);
var shark = new NewImage('img/shark.jpg', 0);
var sweep = new NewImage('img/sweep.png', 0);
var tauntaun = new NewImage('img/tauntaun.jpg', 0);
var unicorn = new NewImage('img/unicorn.jpg', 0);
var usb = new NewImage('img/usb.gif', 0);
var waterCan = new NewImage('img/waterCan.jpg', 0);
var wineGlass = new NewImage('img/wineGlass.jpg', 0);

/*for loop for choosing pictures.*/
var totalClickCount = 0;
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
var exclusion = [];
for(totalClickCount = 0; totalClickCount < 25; totalClickCount++) {
  exclusion = [];
  document.getElementById('img1').innerHTML = '';
  for(var i = 0; i < 3; i++) {
    var num = Math.floor(Math.random() * (19 - 1) + 1);
    exclusion.push(num);
    var firstImg = document.getElementById('img1');
    var imgCreate = document.createElement('img');
    imgCreate.src = imgArray[num].src;
    imgCreate.className += 'divContent';
    firstImg.appendChild(imgCreate);
  }
};
