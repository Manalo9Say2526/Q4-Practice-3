function checkSection(){
    var sectionCode = document.getElementById('sectionData').value;

    switch (sectionCode) {
        case "F":
            document.getElementById('section').innerHTML =
            "You're checking the Fiction Section"; 
            break;
        case "N":
            document.getElementById('section').innerHTML =
            "You're checking the Non-Fiction Section"; 
            break;
        case "R":
            document.getElementById('section').innerHTML =
            "You're checking the Reference Section"; 
            break;
        default:
            document.getElementById('section').innerHTML =
            "Invalid Section Entry";
    }
}
    