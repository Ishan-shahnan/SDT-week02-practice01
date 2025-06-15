var result = 111;
if (result <= 0) {
    console.log("Failed");
}
else if (result >= 0 && result <= 39) {
    console.log("Failed");
}
else if (result >= 40 && result <= 49) {
    console.log("D");
}
else if (result >= 50 && result <= 59) {
    console.log("C");
}
else if (result >= 60 && result <= 69) {
    console.log("B");
}
else if (result >= 70 && result <= 79) {
    console.log("A");
}
else if (result >= 80 && result <= 100) {
    console.log("A+");
}
else  {
    console.log("Invalid");
}