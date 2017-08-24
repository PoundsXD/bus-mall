'use strict';

var imgArray = [];
function NewImage(src, id) {
  this.src = src;
  this.clickCount = 0;
  this.timesDisplayed = 0;
  this.id = id;
  imgArray.push(this);
}

if (localStorage.storedData){
  imgArray = JSON.parse(localStorage.storedData);
}else {
  var bag = new NewImage('img/bag.jpg', 'bag');
  var banana = new NewImage('img/banana.jpg', 'banana');
  var bathroom = new NewImage('img/bathroom.jpg', 'bathroom');
  var boots = new NewImage('img/boots.jpg', 'boots');
  var breakfast = new NewImage('img/breakfast.jpg', 'breakfast');
  var bubblegum = new NewImage('img/bubblegum.jpg', 'bubblegum');
  var chair = new NewImage('img/chair.jpg', 'chair');
  var cthulu = new NewImage('img/cthulhu.jpg', 'cthulhu');
  var dogDuck = new NewImage('img/dogDuck.jpg', 'dogDuck');
  var dragon = new NewImage('img/dragon.jpg', 'dragon');
  var pen = new NewImage('img/pen.jpg', 'pen');
  var petSweep = new NewImage('img/petSweep.jpg', 'petSweep');
  var scissors = new NewImage('img/scissors.jpg', 'scissors');
  var shark = new NewImage('img/shark.jpg', 'shark');
  var sweep = new NewImage('img/sweep.png', 'sweep');
  var tauntaun = new NewImage('img/tauntaun.jpg', 'tauntaun');
  var unicorn = new NewImage('img/unicorn.jpg', 'inicorn');
  var usb = new NewImage('img/usb.gif', 'usb');
  var waterCan = new NewImage('img/waterCan.jpg', 'waterCan');
  var wineGlass = new NewImage('img/wineGlass.jpg', 'wineGlass');
}
/*for loop for choosing pictures.*/
var totalClickCount = 0;
/*var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];*/
var exclusion = [];
var display = [];
var genFix = 0;
var divContentArray = ['divContent1', 'divContent2', 'divContent3'];
function genPictures() {
  display = [];
  document.getElementById('img1').innerHTML = '';
  for(var i = 0; i < 1; i++) {
    var num = Math.floor(Math.random() * imgArray.length);
    exclusion.push(num);
    display.push(num);
    imgArray[num].timesDisplayed++;
    for(var h = 0; h < 2; h++) {
      while(exclusion.includes(num)) {
        var num = Math.floor(Math.random() * imgArray.length);
      }
      exclusion.push(num);
      display.push(num);
      imgArray[num].timesDisplayed++;
    }
    for(var j = 0; j < 3; j++){
      var firstImg = document.getElementById('img1');
      var imgCreate = document.createElement('img');
      imgCreate.src = imgArray[display[j]].src;
      imgCreate.setAttribute('id', imgArray[display[j]].id);
      firstImg.appendChild(imgCreate);
      imgCreate.addEventListener('click', applyClick);
    }
    exclusion = display;
  }

};
genPictures();
var timesDisplayedArray = [];
var clickCountArray = [];
var objectsShownArray = [];
function applyClick() {
  if(totalClickCount < 25) {
    for(var l = 0; imgArray.length > l; l++) {
      console.log(event.target.id);
      if(event.target.id === imgArray[l].id) {
        imgArray[l].clickCount += 1;
      }
    }
    totalClickCount++;
    genPictures();
  } else{
    var clearImg = document.getElementById('img1').innerHTML = '';
    for(var i = 0; i < imgArray.length; i++) {
      timesDisplayedArray.push(imgArray[i].timesDisplayed);
      objectsShownArray.push(imgArray[i].id);
      clickCountArray.push(imgArray[i].clickCount);
    }
    genChart();
  }
};
function genChart() {
  var ctx = document.getElementById('dataChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: objectsShownArray,//x-axis labels
      datasets: [ {
        label: 'Times Displayed',//label for the graph
        data: timesDisplayedArray,//values for the graph - times clicked
        backgroundColor: [
        ],
        borderColor: [
        ],
        borderWidth: 1
      },
      {
        label: 'Times Clicked',//label for the graph
        data: clickCountArray,//values for the graph - times clicked
        backgroundColor: [
        ],
        borderColor: [
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }, ]
      }
    }
  });
  localStorage.setItem('storedData' ,JSON.stringify(imgArray));
};
