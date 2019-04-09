function askName() {
    name = prompt("Enter your name", "");

    // check if name contains decimals
    if (/\d/.test(name)) { 
        alert(name.toUpperCase());
    } else {
        alert(getBackwards(name.toString()));
    }
}

function getBackwards(str) {
    var letters = str.split('');
    letters.reverse();
    return letters.join('');
}