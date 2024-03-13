// chatroom.js

// Function to generate a unique ID for each message
function generateMessageId() {
    return Math.random().toString(36).substr(2, 9);
}

function sendMessage() {
    // Get the message input and username 
    const messageInput = document.getElementById('messageInput');
    const username = "JaneClarke26"; 

    // Get the current date and time
    const timestamp = new Date().toLocaleString();

    // Generate a unique ID for the message
    const messageId = generateMessageId();

    // Create a message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.dataset.messageId = messageId;
    messageElement.innerHTML = `
        <div class="message-header">
            <strong>${username}</strong> (${timestamp})
        </div>
        <div class="message-content">
            ${messageInput.value}
        </div>
    `;

    // Display the message in the chat display area
    const chatDisplay = document.getElementById('chat-display');
    chatDisplay.appendChild(messageElement);

    // Clear the message input
    messageInput.value = '';

   
    chatDisplay.scrollTop = chatDisplay.scrollHeight;


    sendToServer({
        messageId,
        username,
        timestamp,
        content: messageInput.value,
    });
}

// Simulate sending the message data to a server
function sendToServer(messageData) {

    console.log('Sending message to server:', messageData);
}


function toggleProfileMenu() {
    const profileMenu = document.getElementById('profileMenu');
    profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('username').innerText = 'JaneClarke26'; 