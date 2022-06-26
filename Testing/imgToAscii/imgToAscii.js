/*
//https://www.npmjs.com/package/get-image-data
var image = require('get-image-data')
 
image('./drippin.png', function (err, info) {
  var data = info.data
 
  console.log(data)
})
*/
//https://stackoverflow.com/questions/6157497/node-js-printing-to-console-without-a-trailing-newline
//https://www.npmjs.com/package/jimp
//https://github.com/michaelrhodes/get-image-data/blob/master/node.js
//https://www.w3schools.com/graphics/tryit.asp?filename=trycanvas_image

var log = document.getElementById("log")
window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var img = new Image()
  img.src = 'drippin.png'
  canvas.width = img.width
  canvas.height = img.height
  //ctx.scale(.2,.2)
  ctx.drawImage(img, 0, 0);
  
  var data = ctx.getImageData(0,0,canvas.width,canvas.height);
 asciiCreator(data,0,log, canvas.width,canvas.height);
};

function asciiCreator(data, scale, log, w, h) {
  asciiLightChart = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,\"^`'.";
  rgbaVals=data.data;
  var greyScale = [];
  for (var r=0;r<h;r++){
    var row = [];
    for (var c=0;c<w;c+=4){
      row.push(Math.floor((((rgbaVals[w*r+c]+rgbaVals[w*r+c+1]+rgbaVals[w*r+c+2])/3)/255)*asciiLightChart.length))
    }
    greyScale.push(row);
  }
  var height = Math.floor(h*scale);
  var width = Math.floor(w*scale);
  var html = ""
  greyScale.forEach(row=>{
    row.forEach(val=>{
      html+=asciiLightChart[val]+" "
    })
    html+='\n'
  })
  log.innerText=html
}
