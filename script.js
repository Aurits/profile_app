const nameElement = document.getElementById('name');
const bioElement = document.getElementById('bio');
const emailElement = document.getElementById('email');
const phoneElement = document.getElementById('phone');
const updateButton = document.getElementById('updateProfile');

// Function to update profile information
function updateProfile() {
    const newName = prompt("Enter your new name:", "Alanda Ambrose");
    const newBio = prompt("Enter a new bio:", "Write something about yourself...");
    const newEmail = prompt("Enter your new email:", "alandaambrose@gmail.com");
    const newPhone = prompt("Enter your new phone number:", "+256 777 123456");

    if (newName) nameElement.textContent = newName;
    if (newBio) bioElement.textContent = newBio;
    if (newEmail) emailElement.textContent = newEmail;
    if (newPhone) phoneElement.textContent = newPhone;
}

// Event listener for the update button
updateButton.addEventListener('click', updateProfile);
