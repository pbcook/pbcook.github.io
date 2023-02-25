function getShape(sides)  {
    let shape = "";
    switch(sides) {
        case 1:
            shape = "henagon";
            break;
        case 2:
            shape = "digon";
            break;
        case 3:
            shape = "trigon";
            break;
        case 4:
            shape = "tetragon";
            break;
        case 5:
            shape = "pentagon";
            break;
        case 6:
            shape = "hexagon";
            break;
        case 7:
            shape = "heptagon";
            break;
        case 8:
            shape = "octagon";
            break;
        case 9:
            shape = "enneagon";
            break;
        case 10:
            shape = "decagon";
            break;
        default:
            shape = "";
    }
    return shape;
}

function validateEntry(entry) {
    if (entry >= -10 && entry <= 10) {
        return true;
    } else {
        return false;
    }
}

function startShapeGame() {
    let input = prompt("The popular cheetah would like your number...");
    let isValidated = false;
    while (!isValidated) {
        let inputNum = Math.abs(Math.round(parseFloat(input)));
        if (validateEntry(inputNum) == true) {
            alert("Your shape is... the " + getShape(inputNum) + "!");
            break;
        } else {
            input = prompt("Please enter a value between 1 and 10.");
        }
    }
};