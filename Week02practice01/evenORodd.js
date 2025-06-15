var EvenOROdd= "Number";
function EvenOrOdd() {
    let Input = prompt("Enter Number:");
    let Number = parseInt(Input);

    if (isNaN(Number) || Number !== parseFloat(Input)) {
        console.log("Error");
        return;
    }

    if (Number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

EvenOrOdd();
