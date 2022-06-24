const start = {
    text:"You have ran into a bug!<br>You have no ide what is causing the bug, but your code won't work.<br>What do you want to do now?",
    options:[["cry",cry],["give up",gameOver],["Try to fix the problem",fix]],
    img:"code.png"
}

//cry loop
const cry = {
    text:"Ok you got your frustrations out<br>What do you want to do now?",
    options:[["Cry some more",cry],["Give up",gameOver],["Actually try to fix it",fix]],
    img:"crying.jpg"
}

//game over
const gameOver = {
    text:"",
    options:[["restart",start]],
    img:"gameOver.png"
}

const fix = {
    text:"How do you want to fix this bug",
    options:[["Google it!",google],["Cry",cry],["Ask a friend",friend]],
    img:""
}

//ask a friend
const friend = {
    text:"Your friend has already came across this bug!<br>They give you the solution and it works",
    options:[["Awesome",win]],
    img:"friends.jpg"
}

const win = {
    text:"",
    options:[["continue working on your code",start]],
    img:win.jpg
}

//Google time
