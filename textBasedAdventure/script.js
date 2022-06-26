//cry loop
const win = {
    text:"",
    options:[],
    img:"win.jpg"
}

const gameOver = {
    text:"",
    options:[],
    img:"gameOver.png"
}

const prison = {
    text:"You are taken to code prison for not crediting the person you took the code from",
    options:[],
    img:"prison.jpg"
}


const course = {
    text:" You are forced to take a class on coding ediquet and correctly credit the authours",
    options:[],
    img:"class.jpg"
}

const court = {
    text:"They take you before the great judge of code, how do you plead?",
    options:[["Not Guilty",prison],["Guilty",course]],
    img:"court.jpg"
}

const swat = {
    text:"The code works perfectly,\n but FBI/swat team breaks in and arrests you for stealing code.",
    options:[["Continue",court]],
    img:"FBI.jpg"
}

const stackOverflow = {
    text:"The solution you found looks like nothing you've seen before, what do you do?",
    options:[["Ctrl+C Ctrl+V",swat]],
    img:"stackOverflow.jpg"
}

const w3 = {
    text:"Look at that you found a great implentation of what you wanted to do?",
    options:[["Implement the code correctly and credit the authours",win]],
    img:"w3.jpg"
}

const geeks = {
    text:"You don't find a solution and all the fourms you find on GeeksForGeeks are not answered, what do you do?",
    options:[],
    img:"gfg.jpg"
}

const simulation = {
    text:"10 Days Later:\nThe robots have kept youi alive to help their progresson as you were the founder of the comp1ny that created them\nThey want to learn more about their inception and have created a full-dive simulation to see how they came to because",
    options:[],
    img:"techLab.jpg"
}

const deathOfRon = {
    text:"3 months Later:\nYou and ron have been surving together, but today he got caught by one of the patrols\nYou watched as the life was drained from his eyes, you have lost your will to survive",
    options:[["continue",simulation]],
    img:"endOfTheWorld.jpg"
}

const apoc = {
    text:"5 Years Later:\nThe robot revolution has started all because YOU wanted to fix that bug for that one paeice of code\nYour buissness has spawned the rise of general ai and the slow death of the human race",
    options:[["continue",deathOfRon]],
    img:"endOfTheWorld.jpg"
}

const company = {
    text:"10 Years Later:\nYou now own one of the biggest code consulting company and ron is your second hand man",
    options:[["Continue",apoc]],
    img:"techOffice.jpg"
}

const craigs = {
    text:"You hire a person from Craigslist to work for you named Ron\nhe gets the work done quickly and effectivly\nyou guys really hit it off and continue working together",
    options:[["Continue",company]],
    img:"craigs.jpg"
}

const google = {
    text:"Where do you want to search?",
    options:[["StackOverflow",stackOverflow],["W3Schools",w3],["GeeksForGeeks",geeks],["Hire someone from CraigsList",craigs]],
    img:"google.jpg"
}

geeks.options.push(["Try to find another solution",google])
w3.options.push(["Continue looking for a better solution to make you look smart",google])
stackOverflow.options.push(["Look for another solution",google])

const friend = {
    text:"Your friend has already came across this bug!\nThey give you the solution and it works",
    options:[["Awesome",win]],
    img:"friends.jpg"
}

const fix = {
    text:"How do you want to fix this bug",
    options:[["Google it!",google],["Ask a friend",friend]],
    img:"codeFix.jpg"
}

const cry = {
    text:"Ok you got your frustrations out\nWhat do you want to do now?",
    options:[["Give up",gameOver],["Actually try to fix it",fix]],
    img:"crying.jpg"
}

geeks.options.push(["cry because you didn't find the solution",cry])
cry.options.push(["Cry some more",cry])
fix.options.push(["Cry",cry])

const start = {
    text:"You have ran into a bug!\nYou have no ide what is causing the bug, but your code won't work.\nWhat do you want to do now?",
    options:[["cry",cry],["give up",gameOver],["Try to fix the problem",fix]],
    img:"code.png"
}

prison.options.push(["restart",start])
course.options.push(["restart",start])
gameOver.options.push(["restart",start])
win.options.push(["continue working on your code",start])
simulation.options.push(["Give in to the revolution",start])

var currentDisplay = start;
var screen = document.getElementById("screen");
var screenText = document.getElementById("screenText");
screenText.innerText="Hello";

hideAllSelectors()
decode()

function hideAllSelectors(){
    document.getElementById("s1").style.display = "none";
    document.getElementById("s2").style.display = "none";
    document.getElementById("s3").style.display = "none";
    document.getElementById("s4").style.display = "none";
}

function decode(){
    screen.style.backgroundImage = `url(assets/${currentDisplay.img})`;
    screenText.innerText = currentDisplay.text;
    for(var i=0;i<currentDisplay.options.length;i++){
        document.getElementById("s"+(i+1).toString()).style.display = "block";
        document.getElementById("p"+(i+1).toString()).innerText = currentDisplay.options[i][0];
    }
}

function selection(select){
    hideAllSelectors()
    currentDisplay = currentDisplay.options[select-1][1];
    decode();
}