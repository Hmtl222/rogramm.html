class Chat {
    constructor() {
        this.messages = [];
    }

    sendMessage(message) {
        this.messages.push(message);
        this.updateChatInterface();
    }

    receiveMessage(message) {
        this.messages.push(message);
        this.updateChatInterface();
    }

    updateChatInterface() {
        // Logic to update the chat interface goes here
        console.log(this.messages);
    }
}

export default Chat;
