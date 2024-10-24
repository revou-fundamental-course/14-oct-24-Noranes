const Dropdown = document.querySelector('.Dropdown');
const navLinks = document.querySelector('.nav-link');
let menuOpen = false;

/**
// Ask the user for their name
let userName = prompt("What's your name?");

// Find the HTML element to display the name
let welcomeMessage = document.getElementById("welcome-message");

// Use the user's name in the welcome message
if (userName) {
    welcomeMessage.textContent = `Welcome, ${userName}!`;
} else {
    welcomeMessage.textContent = "Welcome, Guest!";
}
*/
Dropdown.addEventListener('click', () => {
    if (menuOpen== false) {
        navLinks.style.display = "block";
        menuOpen = true;
    }
    else if (menuOpen == true) {
        navLinks.style.display = "none";
        menuOpen = false;
    }
});

document.getElementById('questionnaire-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    document.getElementById('output-name').textContent = `Name: ${name}`;
    document.getElementById('output-dob').textContent = `Date of Birth: ${dob}`;
    document.getElementById('output-gender').textContent = `Gender: ${gender}`;
    document.getElementById('output-message').textContent = `Message: ${message}`;

    document.getElementById('output').style.display = 'block';
});