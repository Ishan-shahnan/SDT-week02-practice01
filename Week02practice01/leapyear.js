var Leapyear = "Year";
function LeapYear() {
    var Input = prompt("Enter year:");
    var Year = parseInt(Input);

    if (isNaN(Year) || Year !== parseFloat(Input)) {
        console.log("Error");
        return;
    }

    if ((Year % 4 === 0 && Year % 100 !== 0) || Year % 400 === 0) {
        console.log("Leap Year");
    } else {
        console.log("Not Leap Year");
    }
}

LeapYear();
