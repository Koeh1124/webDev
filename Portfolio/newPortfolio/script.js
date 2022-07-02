//https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
const sleep = ms => new Promise(r => setTimeout(r, ms));
var display = document.getElementsByTagName("main")[0];
const aboutPage = `
<div style="display:flex; overflow-y: hidden; height:fit-content">
    <div style="width:50%; float:left; height:auto; position:relitive; box-sizing: border-box;" class="handsomeBoy"><!--ascii art of me--></div>
    <div style="width:50%; float:right; height:auto; position:relitive; box-sizing: border-box;">
        <h1 style:'box-sizing: border-box;'>Hello world!</h1>
        <p style:'box-sizing: border-box;'>My name is Keenan.
        I like to solve interesting problems through programming.</p>
        <p style:'box-sizing: border-box;'>I know python, c++, html, css, javascript, and have dabbled in java and lua</p>
        <p style:'box-sizing: border-box;'>I have some schooling in cs through the Southern Indiana Career and Tech Center and a summer program called Nexttech Catapult.</p>
    </div>
</div>
`
function clearPage() {
    display.innerHTML = ""
}

function asciiCreator(data, w, h, div) {
    asciiLightChart = ".$@B&WM#*bdwOCJcjf\|)1}]?-_+~>i!I;,^`'.";
    rgbaVals=data.data;
    var html = "<p style:'box-sizing: border-box;' class='ascii'>";
    for (var r=0;r<h;r++){
      for (var c=0;c<w*4;c+=4){
        html+=asciiLightChart[Math.floor((((rgbaVals[(w*r*4)+c]+rgbaVals[(w*r*4)+c+1]+rgbaVals[(w*r*4)+c+2])/3)*(rgbaVals[(w*r*4)+c+3]/255)/255)*(asciiLightChart.length-1))]+" ";
        }
        html+="</p style:'box-sizing: border-box;'>\n<p class='ascii'>";
    }
    html+="</p>";
    //console.log(html);
    div.innerHTML+=html;
}

async function imageAsciiPrep(url,width,div){
    if (!width){
        width=div.offsetWidth;
    }
    console.log(width)
    var canvas = document.getElementById("asciiData");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = `assets/${url}`;
    await sleep(15);
    var scale = Math.round((((width/img.width))/1.2)*10)/10;
    console.log(`Console Width:${width} img(wxh):${img.width}, ${img.height}`);
    if (!scale){
        scale = .4;
    }
    console.log(scale);
    canvas.width = (img.width*scale);
    canvas.height = (img.height*scale);
    ctx.scale(scale,scale);
    ctx.drawImage(img, 0, 0);
    var data = ctx.getImageData(0,0,canvas.width,canvas.height);
    asciiCreator(data,canvas.width,canvas.height,div);
}

var input = document.getElementsByTagName("input")[0];
const test = () => display.innerHTML += "<p>Bruh</p>";
const printImage = (img,width=display.width,div=display) => imageAsciiPrep(img,width,div);
var correctInputs = {
    "test" : test,
    "about" : printImage,
    "drip" : printImage,
    "clear" : clearPage
}

input.addEventListener("keypress", function(key) {
    if(key.key === "Enter") {
        data = input.value;
        if (correctInputs[data]){
            console.log("working")
            if (data === 'about'){
                display.innerHTML += aboutPage;
                printImage('handsomeBoy.jpg',0,document.getElementsByClassName('handsomeBoy')[document.getElementsByClassName('handsomeBoy').length-1])
            }
            else{
                correctInputs[data]();
            }
        }
        input.value = "";
    }
})