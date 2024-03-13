// signup.js

function createAccount(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }


    console.log("Account created successfully!");
    console.log("Full Name: " + fullName);
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Phone Number: " + phone);

    
}

function toggleProfileMenu() {
    const profileMenu = document.getElementById('profileMenu');
    profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
}


document.getElementById('username').innerText = 'JaneClarke26'; 