
const barVals = [10, 150, 200, 100, 80, 90];
const numberOfBars = barVals.length;

$(document).ready(function(){
$('.chart').each(function(){
  for (let barVal of barVals){
    $('.chart').append($("<div class = bars></div>").attr('id',"bar" +barVals.indexOf(barVal)).css('bottom', 200).css('height', barVal).css('margin-left', 50 * barVals.indexOf(barVal)+100)
    .append($('<p class = values></p>').attr('id',"value"+barVals.indexOf(barVal)).text(barVal).css('bottom',barVal-15)));
    console.log(barVals.indexOf(barVal))
    console.log(barVal)
  }
})
/*
const chartEl = document.getElementById("chart");
var txt = "Height with padding and border: " + chartEl.offsetHeight + "px<br>";
txt += "Width with padding and border: " + chartEl.offsetWidth + "px";
console.log(txt);
*/
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
*/
$('.yLabel').each(function(){
  for (let i = 0; i <= barVals[2]; i += barVals[2]/5){
    $('.yLabel').append($('<p class = yLabels></p>').text(i).attr('id',"label"+i).css('margin-left', 50*barVals.indexOf(barVals[0])+100 + bar_1.offsetWidth/3-140)
    .css("bottom",(i-20)));
  }
})

}
);
