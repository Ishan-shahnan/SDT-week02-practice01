var BigName = "Array";
function FindBigName() {
    var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
    var bigName = "";

    for (let i = 0; i < friends.length; i++) {
        var Name = friends[i];
        if (Name.length > bigName.length) {
            bigName = Name
        }
    }
    console.log(bigName);
}

FindBigName();
