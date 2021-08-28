
const barVals = [10, 150, 200, 100, 80, 90];
const numberOfBars = barVals.length;
const colors = ['#ff6b6b','#48dbfb','#1dd1a1']
let count = 0;
$(document).ready(function(){
$.getJSON('data.json',function(json){
  for (key in json){
    console.log(json[key])
    if(json.hasOwnProperty(key)){
      count++;
    }
  }
  let models = [];
  for (key in json){
    models.push(key);
  }
  console.log(models);

let keys = Object.keys(json);

console.log(keys[1]);

let distanceFromBottom = [200,200,200,200];
console.log(distanceFromBottom);
$('.chart').each(function(){
  //for (let key in json){
    for (let j = 0; j<keys.length; j++){
    for (let i = 0; i < json[key].length; i++){

    $('.chart').append($("<div class = bars id = bars ></div>")
    //.attr('class','bars'+ key)
    .attr('class', 'bars' + keys[j])
    .css('background-color',colors[j])
    //.css('background-color', colors[Object.keys(json).indexOf(key)] )
    //.attr('id',"bar" + key+json[key][i].xlabel)
    .attr('id','bar'+keys[j] + json[keys[j]][i].xlabel)
    .append($('<p></p>')
    .text(json[keys[j]][i].ylabel)
    .css('text-align','center')
    )
    .css('position','absolute')
    .css('width',50)
    .css('float','left')
    //.css('bottom',Object.keys(json).indexOf(key) == 0 ? 200 : 200+json[key][i].ylabel/10)
    //.css('height',json[key][i].ylabel/10)
    .css('height',json[keys[j]][i].ylabel/10)
    .css('bottom', distanceFromBottom[i])
    .css('margin-left',100 * i+100));
    distanceFromBottom[i] += json[keys[j]][i].ylabel/10;

    }

  }
})

let maximumHeight = 0;
let eachHeight = [];
let xlabels = [];
for (let i = 0; i < json[key].length;i++){
  eachHeight.push(0);
  xlabels.push('');
}



for (let j = 0; j < json[key].length; j++){
  for (let i = 0; i < keys.length; i++){
  eachHeight[j] += json[keys[i]][j].ylabel;
  xlabels[j] = json[keys[i]][j].xlabel
  }
  if (eachHeight[j] > maximumHeight){
    maximumHeight = eachHeight[j];
  }

}

console.log(xlabels)

console.log(maximumHeight);

$('.xLabel').each(function(){
  for (let i = 0; i < xlabels.length; i++){
    $('.xLabel')
    .css('margin-left',70)
    .css('width', 400)
    .append($('<p class = xLabels></p>')
    .text(xlabels[i])
    .attr('id',"xlabel"+ xlabels[i])
    .css('margin-left', 45 + i * 100 ));
  }
})

$('.yLabel').each(function(){
  for (let i = 0; i <= maximumHeight; i += maximumHeight/10){
    $('.yLabel')
    .css('height',maximumHeight/10)
    .css('margin-left',70)
    .append($('<p class = yLabels></p>')
    .text(i)
    .attr('id',"label"+ i)
    .css('margin-left',-50)
    .css("bottom",i/10-30));
  }})

  $('.legends').each(function(){
    for (let i = 0; i < models.length; i++){
      $('.legends')
        .append($('<div class = legend></div>')
        .attr('id', models[i] + 'Legend')
        .css('background-color',colors[i])
        .css('margin-top', 0)
        .css('margin-left',0)
        .css('height',50)
        .css('width',100)
        .css('border-radius',15)
        .append($('<p></p>')
        .text(models[i])
        .css('text-align', 'center')
        .css('line-height', 3)
        )
        )
    }
  })
/*
$('.chart').each(function(){
  for (let barVal of barVals){
    $('.chart').append($("<div class = bars></div>").attr('id',"bar" +barVals.indexOf(barVal)).css('bottom', 200).css('height', barVal).css('margin-left', 50 * barVals.indexOf(barVal)+100)
    .append($('<p class = values></p>').attr('id',"value"+barVals.indexOf(barVal)).text(barVal).css('bottom',barVal-15)));
    console.log(barVals.indexOf(barVal))
    console.log(barVal)
  }
})
*/
/*
const chartEl = document.getElementById("chart");
var txt = "Height with padding and border: " + chartEl.offsetHeight + "px<br>";
txt += "Width with padding and border: " + chartEl.offsetWidth + "px";
console.log(txt);
*/
/*
const bar_1 = document.getElementById("bar0")
const bar_5 = document.getElementById("bar5")
const bar_5_width = parseInt(window.getComputedStyle(bar_5).getPropertyValue('width'))
const bar_5_marginLeft = parseInt(window.getComputedStyle(bar_5).getPropertyValue('margin-left'))
const xLabel = document.getElementById("xLabel")
const xLabel_marginLeft = parseInt(window.getComputedStyle(xLabel).getPropertyValue('margin-left'))
$('.xLabel').css('margin-left',50*barVals.indexOf(barVals[0])+100 + bar_1.offsetWidth/3 );
$('.xLabel').css('width', (bar_5_marginLeft - xLabel_marginLeft - bar_5_width/1.5));
console.log(bar_1.offsetWidth)
console.log(bar_5_width);
console.log(bar_5_marginLeft);
console.log(xLabel_marginLeft);

$('.xLabel').each(function(){
  for (let barVal of barVals){
    $('.xLabel').append($('<p class = xLabels></p>').text(barVals.indexOf(barVal)).attr('id',"xlabel"+barVals.indexOf(barVal)).css('margin-left', 50 * barVals.indexOf(barVal)+bar_5_width/2));
  }
})

const bar_2 = document.getElementById("bar2")
const bar_2_height = parseInt(window.getComputedStyle(bar_2).getPropertyValue('height'));
$('.yLabel').css('margin-left',50*barVals.indexOf(barVals[0])+100 + bar_1.offsetWidth/3 );
$('.yLabel').css('height', (bar_2_height+100));
/*
$('.yLabel').each(function(){
  for (let barVal of barVals){
    $('.yLabel').append($('<p class = yLabels></p>').text(barVal).attr('id',"label"+barVals.indexOf(barVal)).css('margin-left', 50*barVals.indexOf(barVals[0])+100 + bar_1.offsetWidth/3-150)
    .css("bottom",(barVal - 20)));
  }
})

$('.yLabel').each(function(){
  for (let i = 0; i <= barVals[2]; i += barVals[2]/5){
    $('.yLabel').append($('<p class = yLabels></p>').text(i).attr('id',"label"+i).css('margin-left', 50*barVals.indexOf(barVals[0])+100 + bar_1.offsetWidth/3-140)
    .css("bottom",(i-20)));
  }
})
*/
})
}
);
