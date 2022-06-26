export function asciiCreator(data, scale, log) {
    asciiLisghtChart = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:\"\`\'. "
    rgbaVals=data.data
    log.innerText = rgbaVals.splice(0,20)
}