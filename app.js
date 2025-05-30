// ...existing code...
const chatContainer = document.getElementById('chat-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

function addMessage(text, sender = 'user') {
    const msg = document.createElement('div');
    msg.className = 'message ' + sender;
    msg.textContent = text;
    chatContainer.appendChild(msg);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function botReply(userText) {
    // Примитивный бот для примера
    const replies = [
        "Привет! 👋",
        "Как дела?",
        "Это простой мессенджер, похожий на Telegram.",
        "Я бот, но могу поддержать беседу!",
        "Попробуй отправить ещё что-нибудь."
    ];
    let reply = replies[Math.floor(Math.random() * replies.length)];
    if (userText.toLowerCase().includes('привет')) reply = "Привет! Чем могу помочь?";
    setTimeout(() => addMessage(reply, 'bot'), 600);
}

function sendMessage() {
    const text = messageInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    messageInput.value = '';
    botReply(text);
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
});

// Приветственное сообщение
addMessage("Добро пожаловать в Messenger! Напишите что-нибудь 👇", 'bot');
// ...existing code...
