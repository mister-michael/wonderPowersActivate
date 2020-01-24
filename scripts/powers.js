const targetFlightButton = document.querySelector("#activate-flight")
const targetFlightBox = document.getElementById("flight");
const targetMindReadButton = document.querySelector("#activate-mindreading");
const targetMindReadBox = document.querySelector("#mindreading");
const targetXrayButton = document.querySelector("#activate-xray");
const targetXrayBox = document.querySelector("#xray");
const targetActivateButton = document.querySelector("#activate-all");
const targetDeactivateButton = document.querySelector("#deactivate-all");
const targetPowerList = document.querySelector("#powerList")
const targetPowerClass = document.querySelectorAll(".power")


const flight = () => {
    targetFlightButton.addEventListener("click", function () {
        targetFlightBox.classList.toggle("disabled");
        targetFlightBox.classList.toggle("enabled")
    })
};

const mindRead = () => {
    targetMindReadButton.addEventListener("click", function () {
        targetMindReadBox.classList.toggle("disabled");
        targetMindReadBox.classList.toggle("enabled");
    })
}

const xray = () => {
    targetXrayButton.addEventListener("click", function () {
        targetXrayBox.classList.toggle("disabled");
        targetXrayBox.classList.toggle("enabled");
    })
}
const activateAll = () => {
    targetActivateButton.addEventListener("click", function () {
        targetPowerClass.forEach(div => div.classList.add("enabled"))
    })
}
const deactivateAll = () => {
    console.log()
    targetDeactivateButton.addEventListener("click", function () {
        //bracket before if else because of the multi line remove/add action
            targetPowerClass.forEach(div => {
                if (div.classList.contains("enabled")) {
                    div.classList.remove("enabled");
                    div.classList.add("disabled");
                } else {
                    div.classList.add("disabled")
                }
            })
        })
    }


flight();
mindRead();
xray();
activateAll();
deactivateAll();

//I had so much trouble on this exercise
// what did i learn?
// to console.log and make sure your returning the data type you need
// the proper syntax for for each loops
// in a foreach loop, when using if else conditionals 
//     with multi line actions a bracket is MSMediaKeyNeededEvent 
// check spelling

