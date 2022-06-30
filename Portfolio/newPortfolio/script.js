var display = document.getElementsByTagName("main")[0];

function clearPage() {
    display.innerHTML = ""
}

function asciiCreator(data, w, h) {
    asciiLightChart = "$@B&WM#*bdwOCJcjf\|)1}]?-_+~>i!I;,^`'.";
    rgbaVals=data.data;
    var greyScale = [];
    var html = "<p id='ascii'>"
    for (var r=0;r<h;r++){
      for (var c=0;c<w*4;c+=4){
        html+=asciiLightChart[Math.floor((((rgbaVals[(w*r*4)+c]+rgbaVals[(w*r*4)+c+1]+rgbaVals[(w*r*4)+c+2])/3)*(rgbaVals[(w*r*4)+c+3]/255)/255)*(asciiLightChart.length-1))]+" ";
        }
        html+="</p>\n<p id='ascii'>";
    }
    html+="</p>"
    return(html);
}

function imageAsciiPrep(url){
    var canvas = document.getElementById("asciiData");
    var ctx = canvas.getContext("2d");
    var img = new Image()
    img.src = `assets/${url}`
    width = display.offsetWidth;
    ctx.drawImage(img, 0, 0);
    var data = ctx.getImageData(0,0,canvas.width,canvas.height);
    return(asciiCreator(data,canvas.width,canvas.height));
}

var input = document.getElementsByTagName("input")[0];

const test = () => display.innerHTML += "<p>Bruh</p>";
const printImage = (img) => display.innerHTML += imageAsciiPrep(img);
var correctInputs = {
    "test" : test,
    "birb" : printImage,
    "clear" : clearPage
}


input.addEventListener("keypress", function(key) {
    if(key.key === "Enter") {
        data = input.value;
        if (correctInputs[data]){
            correctInputs[data]('birb.jpg')
        }
        input.value = "";
    }
})