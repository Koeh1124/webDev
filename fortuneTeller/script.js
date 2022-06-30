//[3,any,any]
const lying = {
    text:"You're either lying or your code dosen't work\n how can you write code without coming across a couple bugs??",
    options:[],
    img:"lying.jpg"
}

//[2,1,1]
const goodAtProgramming = {
    text:"According to your inputs I can conclude\n...\nYou are guenly good a coding, congratz :)",
    options:[],
    img:"code.jpg"
}

//[2,1,2]
const hardwork = {
    text:"It seems to me that you encountered a few hard bugs,\nbut I belive that you prserved, even though it took a lot of time,\n good job! keep it up.",
    options:[],
    img:"hardwork.jpg"
}
//[2,2,1]
const lucky = {
    text:"I think you stumbled on some bugs early on adn somehow solved them without knowing.\nThis is what you said when you ran your programm even though you kew there were still bugs\n'Wait, it works?'",
    options:[],
    img:"lucky.webp"
}
//[2,2,2]
const suffering = {
    text:"We've all been there,\n you've been trying to solve the same bug for hous and hours, only to solve it without even know what you did.\nHave fun breaking your coe again while trying to figure out what fixed it :)",
    options:[],
    img:"suffer.jpg"
}
//[1,1,1]
const problemSolver = {
    text:"You might not be super talented when it comes to writing programs on the first try,\n but you are talented when it comes to problem solving.\n you debugged your program to finally getit to work, nice job!\n(or you used google to solve all your problems)",
    options:[],
    img:"problemSolving.png"
}
//[1,1,2]
const pride = {
    text:"You finished the program ad got it running because you couldn't let yourself fail,\n you take pride in your work!",
    options:[],
    img:"pride.jpg"
}
//[1,2,1]
const school = {
    text:"This program is from a class that used it as an example,\n although it works YOU don't know how it works.\n Keep tearing it apart you'll get there!",
    options:[],
    img:"class.jpg"
}
//[1,2,2]
const google = {
    text:"You had an idea and coded it up,\n you came acroos bug after bug and kept relying on google to help you,\n Now you don't know ho it works.\n Mabey you should ask StackOverflow!",
    options:[],
    img:"google.png"
}
const choice3 = {
    text:"How much time have you spent on this project?",
    options:[["A few hours",null],["I don't want to talk about it",null]],
    img:"time.jpg"
}

const choice2 = {
    text:"When writing your code\ndid you feel like you knew what you were doing\nor do you feel that you had no idea what was going on?",
    options:[["I knew what I was doing",choice3],["I had no idea",choice3]],
    img:"know.jpg"
}

const choice1 = {
    text:"So, you want to know how your code works?\nDon't we all!\nFirst, how many bugs did you come across while writing your code?",
    options:[["Many",choice2],["A few",choice2],["none :)",choice2]],
    img:"fortune-teller.jpg"
}
lying.options.push(["See why my other code works",choice1]);
goodAtProgramming.options.push(["See why my other code works",choice1]);
hardwork.options.push(["See why my other code works",choice1]);
lucky.options.push(["See why my other code works",choice1]);
suffering.options.push(["See why my other code works",choice1]);
problemSolver.options.push(["See why my other code works",choice1]);
pride.options.push(["See why my other code works",choice1]);
school.options.push(["See why my other code works",choice1]);
google.options.push(["See why my other code works",choice1]);

var choices = [];
var currentDisplay = choice1;
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
    if (currentDisplay==choice1 || currentDisplay==choice2  || currentDisplay==choice3){
        choices.push(select)
    }
    if (choices.length!==3){
        currentDisplay = currentDisplay.options[select-1][1];
    }
    else{
        findEnding()
        choices=[]
    }
    decode();
}

function findEnding(){
    if(choices[0] == 3){
        currentDisplay=lying;
    }
    else if(choices[0] == 2){
        if(choices[1] == 1){
            if(choices[2] == 1){
                currentDisplay=goodAtProgramming;
            }
            else{
                currentDisplay=hardwork;
            }
        }
        else{
            if(choices[2] == 1){
                currentDisplay=lucky;
            }
            else{
                currentDisplay=suffering;
            }
        }
    }
    else{
        if(choices[1] == 1){
            if(choices[2] == 1){
                currentDisplay=problemSolver;
            }
            else{
                currentDisplay=pride;
            }
        }
        else{
            if(choices[2] == 1){
                currentDisplay=school;
            }
            else{
                currentDisplay=google;
            }
        }
    }
}