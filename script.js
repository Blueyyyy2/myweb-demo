document.getElementById('chat-btn').addEventListener('click', () => {
    document.getElementById('chat-box').style.display = 'block';
});

document.getElementById('send-btn').addEventListener('click', () => {
    let userMessage = document.getElementById('user-input').value;
    if (userMessage.trim() === "") return;

    // Display the user's message in the chat
    let userChatDiv = document.createElement('div');
    userChatDiv.classList.add('user-chat');
    userChatDiv.textContent = `You: ${userMessage}`;
    document.getElementById('chat-content').appendChild(userChatDiv);

    // Clear the input field
    document.getElementById('user-input').value = "";

    // Simulate ChatGPT response (you could expand this later with real AI integration)
    let botChatDiv = document.createElement('div');
    botChatDiv.classList.add('bot-chat');
    botChatDiv.textContent = `ChatGPT: That's an interesting thought! Tell me more...`;
    document.getElementById('chat-content').appendChild(botChatDiv);

    // Scroll to the latest message
    document.getElementById('chat-content').scrollTop = document.getElementById('chat-content').scrollHeight;
});
