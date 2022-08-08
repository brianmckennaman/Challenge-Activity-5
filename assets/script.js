//query selectors
var hourRows = document.querySelectorAll("tr[data-hour]"
)
console.log(hourRows, "working");

//Generate the current day
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

var currentHour = today.hour();
console.log(currentHour)

//dynamicly change colors of rows to reflect current, past and upcoming hours
for (var counter = 0; counter < hourRows.length; counter += 1) {var hourRow = hourRows[counter];
    let hour = parseInt(hourRow.getAttribute("data-hour"))
    console.log(hour, "working", hourRow.querySelector("textarea"))
    let textArea = hourRow.querySelector("textarea")

    //get user input from local storage
    textArea.value = localStorage.getItem(hour)

    if (currentHour === hour) {
        textArea.classList.add("present")
    } else if (currentHour < hour) {
        textArea.classList.add("future")

    } else {
        textArea.classList.add("past")
    }

    //save button to store user inputs
    var saveBtn = hourRow.querySelector("button")

    //store user input to local storage 
    saveBtn.addEventListener("click", function() {
        localStorage.setItem(hour, textArea.value)
    })
}



