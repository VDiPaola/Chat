//gets socket
const socket = io("http://localhost:3000");


socket.on("chat-message", data=>{
    //get messages from server
    addMessage(data[0], data[1]);
})

//variables for form and text box
let messageForm = document.getElementById("messageBox");
let messageField = document.getElementById("chat");


messageForm.addEventListener("submit", (e)=>{
    //prevents defualt http request from submitting a form
    e.preventDefault();

    //gets text
    const messageString = messageField.value;
    const name = "enzo";
    const dataToSend = [name, messageString];

    //sends text to server
    socket.emit("send-message", dataToSend);

    //resets text field
    messageField.value = "";
    messageField.focus();

    //add users message client side
    addMessage("You", messageString);
});

//message template
let textTemplate = "<p class='message'><span id='nameText'>NAME:</span> <span id='messageText'>MESSAGE</span></p>";
let chatBox = document.getElementById("chatBox");
function addMessage(name, msg){
    //replace name and message in template with parameters
    let message = textTemplate.replace("NAME", name);
    message = message.replace("MESSAGE", msg)
    //add message to chatbox
    chatBox.innerHTML += (message);

    //puts scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}