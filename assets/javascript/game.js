
let resetButton = document.querySelector("#reset-button");
let resetCount = document.querySelector("#num-resets");


let shootOne = document.querySelector("#teamone-shoot-button");
let shotsOne = document.querySelector("#teamone-numshots");
let goalOne = document.querySelector("#teamone-numgoals");

let shootTwo = document.querySelector("#teamtwo-shoot-button");
let shotsTwo = document.querySelector("#teamtwo-numshots");
let goalTwo = document.querySelector("#teamtwo-numgoals");

console.log(shotsOne.innerHTML)


shootOne.addEventListener("click", function() {
shotsOne.innerHTML = Number(shotsOne.innerHTML) + 1
if (Math.random() >=0.5) {
    goalOne.innerHTML = Number(goalOne.innerHTML) + 1
}
})



shootTwo.addEventListener("click", function() {
    shotsTwo.innerHTML = Number(shotsTwo.innerHTML) + 1
    if (Math.random() >=0.5) {
        goalTwo.innerHTML = Number(goalTwo.innerHTML) + 1
    }
    })


resetButton.addEventListener("click", function () {
    shotsOne.innerHTML = 0
    shotsTwo.innerHTML = 0
    goalOne.innerHTML = 0
    goalTwo.innerHTML = 0
    resetCount.innerHTML = Number(resetCount.innerHTML) + 1
})