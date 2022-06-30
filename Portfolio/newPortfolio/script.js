const test = () => console.log("Bruh");

var correctInputs = {
    "test" : test
}

var input = document.getElementsByTagName("input")[0];

input.addEventListener("keypress", function(key) {
    if(key.key === "Enter") {
        data = input.value;
        if (correctInputs[data]){
            correctInputs[data]()
        }
    }
})