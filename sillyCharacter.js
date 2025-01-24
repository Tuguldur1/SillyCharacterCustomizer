// Declare and initialize variables
const names = [
    "Captain Waffles", 
    "Sir Spaghetti", 
    "Lumpy McNoodle", 
    "Baron Von Pizza", 
    "Professor Pickles", 
    "Silly McFunny",
    "Lady Banana", 
    "Agent Tofu", 
    "Dr. Jellybean", 
    "Mister Pancake"
];

let characterName = getRandomName(); // Randomly selected name from the array
let birthYear = getRandomYear(); // Randomly generated birth year (we'll use this to calculate age)
let age = calculateAge(birthYear); // Age based on the random birth year
let isSuperhero = Math.random() > 0.5; // Randomly decides if the character is a superhero
let specialPowers = ["super strength", "invisibility", "laser eyes", "time travel", "telekinesis"];
let favoriteFood = "pizza";

// Function to get a random name from the array
function getRandomName() {
    return names[Math.floor(Math.random() * names.length)];
}

// Function to generate a random year between 1900 and 2023
function getRandomYear() {
    return Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900;
}

// Function to calculate age based on the random birth year
function calculateAge(year) {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
}

// Function to get user input (if any)
function getUserInput() {
    const nameInput = document.getElementById("nameInput").value.trim();
    const ageInput = document.getElementById("ageInput").value.trim();
    
    if (nameInput) {
        characterName = nameInput;
    }

    if (ageInput && !isNaN(ageInput)) {
        age = Math.max(0, parseInt(ageInput)); // Ensure age doesn't go below 0
    }
}

// Function to generate a random character description
function generateCharacterDescription() {
    getUserInput(); // Check for any user inputs
    
    const randomPower = specialPowers[Math.floor(Math.random() * specialPowers.length)];
    const superheroStatus = isSuperhero ? "a superhero" : "just an ordinary human";

    const description = `${characterName} is ${age} years old, loves eating ${favoriteFood}, and has the amazing ability to ${randomPower}. They are ${superheroStatus}.`;

    // Display the character description
    document.getElementById("characterDescription").innerText = description;
}

// Function to update the character's description after changing age
function updateCharacterDescription() {
    const randomPower = specialPowers[Math.floor(Math.random() * specialPowers.length)];
    const superheroStatus = isSuperhero ? "a superhero" : "just an ordinary human";
    const description = `${characterName} was born in ${birthYear}, making them ${age} years old, loves eating ${favoriteFood}, and has the amazing ability to ${randomPower}. They are ${superheroStatus}.`;

    // Update the description displayed on the webpage
    document.getElementById("characterDescription").innerText = description;
}

// Functions to modify character's age
function increaseAge() {
    age++;
    updateCharacterDescription();
}

function decreaseAge() {
    if (age > 0) {
        age--;
    }
    updateCharacterDescription();
}

// Function to toggle superhero status (added feature)
function toggleSuperheroStatus() {
    isSuperhero = !isSuperhero;
    updateCharacterDescription();
}

// Add event listeners for buttons
document.getElementById("generateButton").addEventListener("click", generateCharacterDescription);
document.getElementById("increaseAgeButton").addEventListener("click", increaseAge);
document.getElementById("decreaseAgeButton").addEventListener("click", decreaseAge);
document.getElementById("toggleSuperheroButton").addEventListener("click", toggleSuperheroStatus); // New button for toggling superhero status

// Generate initial random character when the page loads
document.addEventListener("DOMContentLoaded", generateCharacterDescription);
