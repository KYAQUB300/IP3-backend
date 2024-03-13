
const validUsername = 'JaneClarke26';
const validPassword = 'pass';

function authenticate(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Simple authentication logic
    if (username === validUsername && password === validPassword) {
        // Authentication successful
        showEmergencyContactSection();
    } else {
        // Authentication failed
        alert('Invalid username or password. Please try again.');
    }

    // Clear the input fields
    usernameInput.value = '';
    passwordInput.value = '';
}

function showEmergencyContactSection() {
    // Display the emergency contact section
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('emergencyContactSection').style.display = 'block';
}

function sendAlert() {
    // Add logic to send alert to the specified emergency contact
    alert('Emergency alert sent!');
}

function toggleProfileMenu() {
    const profileMenu = document.getElementById('profileMenu');
    profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
}


document.getElementById('username').innerText = 'JaneClarke26'; 
