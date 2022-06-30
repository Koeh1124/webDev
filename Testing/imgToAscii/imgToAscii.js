//https://www.w3schools.com/graphics/tryit.asp?filename=trycanvas_image

var log = document.getElementById("log")
window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var img = new Image()
  img.src = 'lying.jpg'
  canvas.width = img.width*.8
  canvas.height = img.height*.8
  ctx.scale(.8,.8)
  ctx.drawImage(img, 0, 0);
  document.getElementById("test").innerText=`Height:${img.height} width:${img.width}`
  var data = ctx.getImageData(0,0,canvas.width,canvas.height);
 asciiCreator(data,0,log, canvas.width,canvas.height);
};

function asciiCreator(data, scale, log, w, h) {
  asciiLightChart = "$@B&WM#*bdwOCJcjf\|)1}]?-_+~>i!I;,^`'.";
  rgbaVals=data.data;
  var greyScale = [];
  var html = ""
  for (var r=0;r<h;r++){
    for (var c=0;c<w*4;c+=4){
      html+=asciiLightChart[Math.floor((((rgbaVals[(w*r*4)+c]+rgbaVals[(w*r*4)+c+1]+rgbaVals[(w*r*4)+c+2])/3)*(rgbaVals[(w*r*4)+c+3]/255)/255)*(asciiLightChart.length-1))]+" ";
      //row.push(val)
      //console.log(`row:${r} col:${c} R:${rgbaVals[w*r+c]} G:${rgbaVals[w*r+c+1]} B${rgbaVals[w*r+c+2]} A:${rgbaVals[w*r+c+3]/255} ADV:${((rgbaVals[w*r+c]+rgbaVals[w*r+c+1]+rgbaVals[w*r+c+2])/3)} val:${Math.floor((((rgbaVals[w*r+c]+rgbaVals[w*r+c+1]+rgbaVals[w*r+c+2])/3)*(rgbaVals[w*r+c+3]/255)/255)*asciiLightChart.length)}`)
    }
    html+='\n';
  }
  //console.log(greyscale)
  /*
  greyScale.forEach(row=>{
    row.forEach(val=>{
      html+=asciiLightChart[val]+" "
    })
    
  })
  */
  log.innerText=html
}