// emergency.js

// Function to add emergency contact
function addEmergencyContact() {
    // Get input values
    const contactName = document.getElementById('contactName').value;
    const contactNumber = document.getElementById('contactNumber').value;

    // Validate inputs
    if (contactName.trim() === '' || contactNumber.trim() === '') {
        alert('Please enter both contact name and number.');
        return;
    }

    // Create a new contact element
    const newContact = document.createElement('div');
    newContact.innerHTML = `<strong>${contactName}:</strong> ${contactNumber}`;

    // Append the new contact to the contact list
    const contactList = document.getElementById('contactList');
    contactList.appendChild(newContact);

    // Clear input fields
    document.getElementById('contactName').value = '';
    document.getElementById('contactNumber').value = '';
}


function addEmergencyContact() {
    // Get the contact name and number from the input fields
    const contactNameInput = document.getElementById('contactName');
    const contactNumberInput = document.getElementById('contactNumber');

    const contactName = contactNameInput.value;
    const contactNumber = contactNumberInput.value;

    // Validate if the inputs are not empty
    if (contactName.trim() === '' || contactNumber.trim() === '') {
        alert('Please enter both contact name and number.');
        return;
    }

    // Create a link element to display the clickable contact
    const contactLink = document.createElement('a');
    contactLink.textContent = `${contactName}: ${contactNumber}`;
    contactLink.href = `tel:${contactNumber}`; 

    // Append the contact to the contact list
    const contactList = document.getElementById('contactList');
    contactList.appendChild(contactLink);

    // Add a line break for better readability
    contactList.appendChild(document.createElement('br'));

    // Clear the input fields
    contactNameInput.value = '';
    contactNumberInput.value = '';
}

function toggleProfileMenu() {
    const profileMenu = document.getElementById('profileMenu');
    profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
}


document.getElementById('username').innerText = 'JaneClarke26'; 
