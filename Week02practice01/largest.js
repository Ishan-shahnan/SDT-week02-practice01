var Largest = "Array";
function FindLarge() {
    var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

    var largest = Math.max(...numbers); 
    
    console.log(largest);
}

FindLarge();
