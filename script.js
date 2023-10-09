document.addEventListener('DOMContentLoaded', function () {
    const chatLog = document.getElementById('chatLog');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', function () {
        const userMessage = userInput.value;
        if (userMessage.trim() !== '') {
            appendMessage('You: ' + userMessage, 'user');
            userInput.value = ''; // Clear the input field

            // Simulate a response from the chatbot (you can replace this with actual chatbot logic)
            setTimeout(function () {
                const botMessage = 'Bot: This is a sample response from the chatbot.';
                appendMessage(botMessage, 'bot');
            }, 1000);
        }
    });

    function appendMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
    }
});
