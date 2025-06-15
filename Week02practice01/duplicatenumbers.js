var Duplicate = "Array";
function number() {
    var number = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
    var uniqueSet = new Set(number);
    var uniqueArray = Array.from(uniqueSet);
    console.log(uniqueArray);
}

number();
