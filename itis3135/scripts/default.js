function displaydateandtime() {
    let date = new Date();
    let day = date.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayofweek = weekdays[date.getDay()];
    let hours = date.getHours();
    let amorpm;
    if (hours > 12) {
        amorpm = "pm";
        hours -= 12;
    } else if (hours = 12) {
        amorpm = "pm";
    } else if (hours = 0) {
        amorpm = "am";
        hours += 12;
    } else {
        hours = "am";
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    document.getElementById("dateandtime").innerHTML = "Welcome! It's " + hours + ":" + minutes + amorpm + " on " + dayofweek + ", " + day + " " + month + ", " + year + ".";
}
displaydateandtime();

function greetMe() {
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let message = "Parker Cook's Popular Cheetah welcomes you, " + name + "! We're glad you are doing " + feeling + "!";
    document.getElementById("greeting").innerHTML = message;
}

function growl() {
    alert("Grrrrrr");
}

function askForNumber() {
    let randomNum = Math.floor(Math.random() * 10);
    alert("The popular cheetah says the magic number today is... " + randomNum + "!")
}

function beQuiet() {
    alert("You thought you could get me to go away.");
    alert("Never.");
    alert("Don't even think about disabling the alerts.");
    alert("I am watching you...");
}

function displayImage() {
    document.getElementById("cheetah_pic").src = "https://images.pexels.com/photos/259343/pexels-photo-259343.jpeg?cs=srgb&dl=animal-big-cat-cat-259343.jpg&fm=jpg";
}

function giveFood() {
    let food = prompt("What type of food am I getting?");
    alert("Thanks for the " + food + "!");
}

document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
